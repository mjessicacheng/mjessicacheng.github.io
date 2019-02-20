	var premises = []; //global array
	var conc;

	function serialize() {
		//grab values from form
		var premise1 = document.getElementById("premise1").value;
		var premise2 = document.getElementById("premise2").value;
		var premise3 = document.getElementById("premise3").value;
		var premise4 = document.getElementById("premise4").value;

		var temp = [premise1, premise2, premise3, premise4];

		for (var i = 0; i < temp.length; i++) {
			if (temp[i].length!=0) {
				premises.push(temp[i]);
			}
		}

		conc = document.getElementById("conc").value;
	}
	

	function isValid(original) {
		//quick checks: empty string
		//sentence cannot begin with & or | or )
		//sentence cannot end with & or | or ! or (
	    var temp1 = original[0];
	    var temp2 = original[original.length-1];
	    if (original.length==0 ||
	        temp1 =='&' || temp1 =='|' || temp1 == ')' || temp1 =='>' || temp1 =='=' || 
	        temp2 == '&' || temp2 == '|' || temp2 == '!' || temp2 == '(' || temp2 == '>' ||
	        temp2 == '=' ) {
	        return false;
	    }

		var brackets = 0;
		var trueFalse = 0;

	    for (var i = 0; i<original.length; i++) {
	    	var ch = original[i];

	        if (ch != '(' && ch != ')' && ch != '&' && ch != '|' &&
	        	!(ch>='P' && ch<='Z') && ch != '>' && ch != '=' && ch != '!') {
	        	return false;
	    	}

	        if (ch>='P' && ch<='Z') {
	        	trueFalse++;
	        	if ( i!=original.length-1 ) {
	        		var b = original[i+1];
	        		if (b=='!' || (b>='P' && b<='Z') ) {
	                    return false; //can't have multiple sentence letters following one another
	                }
	            }
	        }
	        
	        if (ch== '(' ) {
	            // must be followed by sentence letter, !, or (
	            var b = original[i+1];
	            if (b != '!' && b != '(' && !(b>='P' && b<='Z') )
	            	return false;

	            //( must follow !, & or | or ( or > or =
	            if (i!=0) { //prevent looking out of range
	            	b = original[i-1];
	            	if (b != '!' && b != '&' && b != '|' && b != '(' && b != '>' && b != '=')
	            		return false;
	            }
	            brackets++;
	        }
	        
	        if (ch== ')' ) {
	            // ) must follow sentence letter or )
	            var b = original[i-1];
	            if ( !(b>='P' && b<='Z') && b!= ')' )
	            	return false;

	            // must be followed by |, &, or )
	            if( i!=original.length-1 ) { //prevent looking out of range
	            	b = original[i+1];
	            	if(b != '|' && b != '&' && b != ')' && b != '>' && b != '=')
	            		return false;
	            }
	            brackets--;
	        }
	        
	        if (ch == '!' || ch=='&' || ch=='|' || ch=='>' || ch== '=') {
	            //& and | cannot follow any of the three
	            if( i!=original.length-1 ) { //prevent looking out of range
	            	var b = original[i+1];
	            	if (b=='&' || b=='|' || b=='>' || b== '=')
	            		return false;
	            }
	        }
	        
	        if (brackets < 0)
	        	return false;
	    } //end of for loop
	    //sentence must have equal amount of ( and )
	    if (brackets!=0) {
	    	return false;
	    }
	    
	    //sentence must have at least one sentence letter
	    if (trueFalse == 0) {
	    	return false;
	    }
	    
	    return true;
	}

	function letters() {
		var sentenceLetters = "";
		var unique;

		for (var a = 0; a < premises.length; a++) {
			var original = premises[a];
	        for (var i = 0; i < premises[a].length; i++) {
	            var ch = original[i];
	            unique = true;
	            if (ch >= 'P' && ch <= 'Z') {
	                for (var j = 0; j<sentenceLetters.length; j++) {
	                    if (ch==sentenceLetters[j]) {
	                        unique = false;
	                        break;
	                    }
	                }
	                if (unique == true) {
	                    sentenceLetters+=ch;
	                }
	            }
	        }
    	}

    	var concstring= conc;
	    for (var i = 0; i < concstring.length; i++) {
	        var ch = concstring[i];
	        unique = true;
	        if ((ch>='A' && ch<='Z')) {
	            for (var j = 0; j<sentenceLetters.length; j++) {
	                if (ch==sentenceLetters[j]) {
	                    unique = false;
	                    break;
	                }
	            }
	            if (unique == true) {
	                sentenceLetters+=ch;
	            }
	        }
	    }
	    return sentenceLetters;
	}

	function generateValues(i,s_letters) {
		var truthString;
		var p = s_letters.length;

		if (p==1) {
			if (i==0) {truthString = "T";}
			if (i==1) {truthString = "F";}
		}

		if (p==2) {
			if (i==0) {truthString = "TT";}
			if (i==1) {truthString = "TF";}
			if (i==2) {truthString = "FT";}
			if (i==3) {truthString = "FF";}
		}

		if (p==3) {
			if (i==0) {truthString = "TTT";}
			if (i==1) {truthString = "TTF";}
			if (i==2) {truthString = "TFT";}
			if (i==3) {truthString = "TFF";}
			if (i==4) {truthString = "FTT";}
			if (i==5) {truthString = "FTF";}
			if (i==6) {truthString = "FFT";}
			if (i==7) {truthString = "FFF";}
		}
		if (p==4) {
			if (i==0) {truthString = "TTTT";}
			if (i==1) {truthString = "TTTF";}
			if (i==2) {truthString = "TTFT";}
			if (i==3) {truthString = "TTFF";}
			if (i==4) {truthString = "TFTT";}
			if (i==5) {truthString = "TFTF";}
			if (i==6) {truthString = "TFFT";}
			if (i==7) {truthString = "TFFF";}
			if (i==8) {truthString = "FTTT";}
			if (i==9) {truthString = "FTTF";}
			if (i==10) {truthString = "FTFT";}
			if (i==11) {truthString = "FTFF";}
			if (i==12) {truthString = "FFTT";}
			if (i==13) {truthString = "FFTF";}
			if (i==14) {truthString = "FFFT";}
			if (i==15) {truthString = "FFFF";}
		}
    
    return truthString;
	}

	///---take in truth values and convert them---///
	function processString(original,letters,values) {
		var converted = original;
	    for (var i = 0; i < converted.length; i++) {
	        var ch = converted[i];
	        for (var j = 0; j<letters.length;j++) {
	            if (ch==letters[j]) {
	            	converted = converted.substr(0,i) + values[j] + converted.substr(i + 1);
	                //converted[i] = values[j];
	            }
	        }
	    }
    return converted;
	}

	function infixPostfix(infix) {
		var postfix = "";
		var postfixStack = [];

		for (var i = 0; i<infix.length; i++) {
				var ch = infix[i];
				switch (ch) {
					case 'T':
					case 'F':
						postfix+=ch;
						break;
					case '(':
						postfixStack.push(ch);
						break;
					case ')':
						while( postfixStack[postfixStack.length-1] !='(' ) {
							postfix+= postfixStack[postfixStack.length-1];
							postfixStack.pop();
						}
		                postfixStack.pop(); //remove the '('
		                break;
	                case '&':
	                case '|':
	                case '!':
	                case '=':
	                case '>':
		                while (postfixStack.length!=0 && postfixStack[postfixStack.length-1] != '(' &&
		                	precedence(ch) <= precedence(postfixStack[postfixStack.length-1] ) ) {
		                    if (ch=='!' && postfixStack[postfixStack.length-1] =='!') { //if multiple !'s, push onto stack without appending to the postfix string
		                    	break;
		                }
	                postfix+=postfixStack[postfixStack.length-1];
	                postfixStack.pop();
	            }
	            postfixStack.push(ch);
	            break;
	        }
    	}
	    while (postfixStack.length != 0) {
	    	postfix += postfixStack[postfixStack.length -1];
	    	postfixStack.pop();
	    }
	    
	    return postfix;
	}

	function precedence (ch) {
	    //Following convention, ! has higher precedence than &, which has higher precedence than |, and operators of equal precedence associate left to right
	    
	    switch (ch) {
	        case '!':
	            return 5;
	        case '&':
	            return 4;
	        case '|':
	            return 3;
	        case '>':
	            return 2;
	        case '=':
	            return 1;
	    }
	    return -1;
	}

	function evaluate(infix) {
		var evaluateStack = [];
		var result;

		var postfix = infixPostfix(infix);

		for (var i = 0; i<postfix.length;i++) {
			var ch = postfix[i];
			switch (ch) {
				case 'T':
					evaluateStack.push(true);
					break;
				case 'F':
					evaluateStack.push(false);
					break;
				case '!':
					var b = evaluateStack[evaluateStack.length -1]; //stack top
					evaluateStack.pop();
					evaluateStack.push(!b);
					break;
				default:
					var operand2 = evaluateStack[evaluateStack.length -1]; 
					evaluateStack.pop();
					var operand1 = evaluateStack[evaluateStack.length -1];
					evaluateStack.pop();
					if (ch=='&')
        				evaluateStack.push(operand1 && operand2);
        		
	        		if (ch=='|')
	        			evaluateStack.push(operand1 || operand2);
	        		
	        		if (ch=='>') {
	        			if (operand1 && !operand2)
	        				evaluateStack.push(false);
	        			else 
	        				evaluateStack.push(true);
	        		}

	        		if (ch=='=') {
	        			if ( (operand1 && operand2) || (!operand1 && !operand2) )
	        				evaluateStack.push(true);
	        			else
	        				evaluateStack.push(false);
	        		}
	        		break;
			}
		}
    	return evaluateStack[evaluateStack.length-1];
	}

	function validity() {
		serialize();

		for (var i = 0; i < premises.length; i++) {
			if (!isValid(premises[i])) {
				document.getElementById("result").innerHTML = "premise is invalid; please check formatting.";
				return false;
			}
		}

		if (!isValid(conc)) {
			document.getElementById("result").innerHTML = "conclusion is invalid; please check formatting.";
			return false;
		}
		debugger;

		var s_letters = letters();
		var times = 1 << s_letters.length;
		for (var i = 0; i < times; i++) {
			var values = generateValues(i,s_letters);
			var temp = processString(conc,s_letters,values);
			if(!evaluate(temp)) {
				var printstring = "tautologically invalid when: ";
				
				if (premises.length==0) {
					for (var j = 0; j<s_letters.length; j++)
						printstring = printstring + s_letters[j] + " = " + values[j] +" <br>";
					document.getElementById("result").innerHTML = printstring;
					return false;
				}
				else {
					for (var j = 0; j < premises.length; j++) {
                        var pr = processString( premises[j], s_letters, values);
                        if (!evaluate(pr))
                            break;
                        if ( j == premises.length-1) {
                            for (var k = 0; k<s_letters.length; k++)
                            	printstring = printstring + s_letters[k] + " = " + values[k];
                            document.getElementById("result").innerHTML = printstring;
                            return false;
                    	}
					}
				}
			}
		}
		document.getElementById("result").innerHTML = "tautologically valid!";
		return false;
	}
