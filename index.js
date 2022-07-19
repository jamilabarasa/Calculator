
$(document).ready(function () {
    var input = ""
    var equation = ""
    var result = ""
    var history = []
    var memory = ""
    var decimal = false
    var hexadecimal = false
    var octal = false
    var binary = false
  
    $(".operator").click(function () {
  
        input = $(this).attr("value")
        equation += input
  
        $(".input").html(input)
        $('.input').css("font-weight", "bold")
        $('.input').css("font-size", "larger")
        $(".result").html(equation)
  
        if (input === "±") {
            equation = equation.slice(0, -1)
            if (equation.charAt(0) == "-") {
                equation = equation.slice(1)
            } else {
                equation = "-" + equation
            }
            $(".result").html(equation)
  
        } else if (input === "π") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = b * 3.141592654
            var k = b + "π"
            var a = equation
  
            if (isNaN(equation)) {
                var c = k + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
  
            $(".input").html(result)
            $(".result").html(k)
            equation = result
        } else if (input === "√") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = Math.sqrt(b)
            var k = "√" + b
  
            $(".input").html(result)
            $(".result").html(k)
  
            var a = equation
            var b = result
            if (isNaN(equation)) {
                var c = k + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
  
            equation = result
  
        } else if (input === "r") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = 1 / b
            var d = "recp" + "(" + b + ")"
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
  
            $(".input").html(result)
            $(".result").html(d)
            equation = result
  
        } else if (input === "e") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = Math.exp(b)
  
            var d = "e" + b
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
            $(".input").html(result)
            $(".result").html(d)
            equation = result
  
        } else if (input === "l") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = Math.log10(b)
  
            var d = "log10" + "(" + b + ")"
  
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
            $(".input").html(result)
            $(".result").html(d)
            equation = result
  
        } else if (input === "n") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = Math.log(b)
            var d = "log" + "(" + b + ")"
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
            $(".input").html(result)
            $(".result").html(d)
            equation = result
  
        } else if (input === "!") {
            let eq = equation.slice(0, -1)
            let v = equation.slice(0, -1)
            var result = 1;
            let k
            if (eq === 0) {
                k = "1";
            } else if (eq < 0) {
                k = "undefined";
            } else {
                var result = 1;
                for (var i = eq; i > 0; i--) {
                    result = result * i;
                }
                eq = result;
            }
  
            var d = v + "!"
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
  
            }
  
            $(".hist p").html(history)
            $(".input").html(result)
            $(".result").html(d)
            equation = result
  
        } else if (input === "a") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = Math.abs(b)
            var d = "abs" + "(" + b + ")"
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
            }
            $(".hist p").html(history)
            $(".input").html(result)
            $(".result").html(d)
            equation = result
        } else if (input === "x") {
            var a = String(equation)
            var b = a.slice(0, -1)
            result = Math.exp(b)
            var d = "exp" + "(" + b + ")"
            if (isNaN(equation)) {
                var c = d + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
            }
            $(".hist p").html(history)
            $(".input").html(result)
            $(".result").html(d)
            equation = result
        } else if (input === "=") {
            var a = equation.indexOf("=")
            equation = equation.slice(0, a)
            result = eval(equation)
            $(".input").html(result)
            // $(".result").html(a)
        } else {
  
            for (var i = 0; i < equation.length; i++) {
                result = eval(equation)
            }
  
            $(".input").html(result)
  
            $(".result").html(equation)
  
  
            var a = equation
            var b = result
            if (isNaN(equation) && equation) {
                var c = equation + "=" + result
            }
            if (c != undefined) {
                history.push("<li><p>" + c + "</p></li>")
            }
  
            $(".hist p").html(history)
  
            equation = result
        }
  
    })
  
  
  
    $(".Notoperator").click(function () {
  
        sign = $(this).attr("value")
  
        if (sign === "c") {
            input = ""
            equation = ""
            result = ""
            $(".input").html(equation)
            $(".result").html(result)
        }
  
        if (sign == "ce") {
            equation = String(equation)
            if (equation > 1) {
                equation = equation.slice(0, -1)
  
            } else {
                equation = 0
            }
            $(".result").html(equation)
        }
  
    })
  
  
    $(".symbol-display").click(function () {
  
        var ip = ""
        var eq = ""
  
        $(".dec").click(function () {
            decimal = true
            binary = false
            hexadecimal = true
            octal = false
            $(this).css("color", "blue")
            $(".hex").css("color", "")
            $(".bin").css("color", "")
            $(".oct").css("color", "")
  
        })
        $(".hex").click(function () {
            decimal = false
            binary = false
            hexadecimal = true
            octal = false
            $(this).css("color", "blue")
            $(".dec").css("color", "")
            $(".bin").css("color", "")
            $(".oct").css("color", "")
        })
  
        $(".bin").click(function () {
            decimal = false
            binary = true
            hexadecimal = false
            octal = false
            $(this).css("color", "blue")
            $(".hex").css("color", "")
            $(".dec").css("color", "")
            $(".oct").css("color", "")
  
  
        })
        $(".oct").click(function () {
            decimal = false
            binary = false
            hexadecimal = false
            octal = true
            $(this).css("color", "blue")
            $(".hex").css("color", "")
            $(".bin").css("color", "")
            $(".dec").css("color", "")
  
        })
  
  
        if (octal) {
  
            $(".pg").click(function () {
                ip = $(this).attr("value")
                eq += ip
                $(".input").html(ip)
                $('.input').css("font-weight", "bold")
                $('.input').css("font-size", "larger")
                $(".result").html(eq)
  
                // }
  
                $(".pmemstore").click(function () {
  
                    memory = eq
                    localStorage.setItem("memory", memory);
                    $(".mem p").html(memory)
                })
  
                if (ip === "~") {
                    eq = eq.slice(0, -1)
                    if (eq.indexOf("+") != -1) {
                        var numbers = eq.split("+");
                        var x = parseInt(numbers[0], 8);
                        var y = parseInt(numbers[1], 8);
                        var sum = x + y;
                        var ans = sum.toString(8);
                        var a = numbers[0] + "+" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("-") != -1) {
                        var numbers = eq.split("-");
                        var x = parseInt(numbers[0], 8);
                        var y = parseInt(numbers[1], 8);
                        var sub = x - y;
                        var ans = sub.toString(8);
                        var a = numbers[0] + "-" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("*") != -1) {
                        var numbers = eq.split("*");
                        var x = parseInt(numbers[0], 8);
                        var y = parseInt(numbers[1], 8);
                        var mul = x * y;
                        var ans = mul.toString(8);
                        var a = numbers[0] + "*" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("/") != -1) {
                        var numbers = eq.split("/");
                        var x = parseInt(numbers[0], 8);
                        var y = parseInt(numbers[1], 8);
                        var div = x / y;
                        var ans = div.toString(8);
                        var a = numbers[0] + "/" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    }
                    ip = ""
                    eq = ""
                    // eq = ans;
  
                    // $(".result").html(eq)
                }
  
            })
        }
  
        if (hexadecimal) {
  
  
            $(".pg").click(function () {
                ip = $(this).attr("value")
                eq += ip
                $(".input").html(ip)
                $('.input').css("font-weight", "bold")
                $('.input').css("font-size", "larger")
                $(".result").html(eq)
  
                // }
  
                $(".pmemstore").click(function () {
  
                    memory = eq
                    localStorage.setItem("memory", memory);
                    $(".mem p").html(memory)
                })
  
                if (ip === "~") {
                    eq = eq.slice(0, -1)
                    if (eq.indexOf("+") != -1) {
                        var numbers = eq.split("+");
                        var x = parseInt(numbers[0], 16);
                        var y = parseInt(numbers[1], 16);
                        var sum = x + y;
                        var ans = sum.toString(16);
                        var a = numbers[0] + "+" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("-") != -1) {
                        var numbers = eq.split("-");
                        var x = parseInt(numbers[0], 16);
                        var y = parseInt(numbers[1], 16);
                        var sub = x - y;
                        var ans = sub.toString(16);
                        var a = numbers[0] + "-" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("*") != -1) {
                        var numbers = eq.split("*");
                        var x = parseInt(numbers[0], 16);
                        var y = parseInt(numbers[1], 16);
                        var mul = x * y;
                        var ans = mul.toString(16);
                        var a = numbers[0] + "*" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("/") != -1) {
                        var numbers = eq.split("/");
                        var x = parseInt(numbers[0], 16);
                        var y = parseInt(numbers[1], 16);
                        var div = x / y;
                        var ans = div.toString(16);
                        var a = numbers[0] + "/" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    }
                    ip = ""
                    eq = ""
                    // eq = ans;
  
                    // $(".result").html(eq)
                }
  
            })
        }
  
        if (binary) {
  
  
            $(".pg").click(function () {
  
                ip = $(this).attr("value")
                // if (ip != "0" || input != "1" || input != "+" || input != "-" || input != "*" || input != "/") {
                //     $(".input").html("invalid variable")
  
                // } else {
                eq += ip
                $(".input").html(ip)
                $('.input').css("font-weight", "bold")
                $('.input').css("font-size", "larger")
                $(".result").html(eq)
  
                // }
  
                $(".pmemstore").click(function () {
  
                    memory = eq
                    localStorage.setItem("memory", memory);
                    $(".mem p").html(memory)
                })
  
                if (ip === "~") {
    
                    eq = eq.slice(0, -1)
                    if (eq.indexOf("+") != -1) {
                        var numbers = eq.split("+");
                        var x = parseInt(numbers[0], 2);
                        var y = parseInt(numbers[1], 2);
                        var sum = x + y;
                        var ans = sum.toString(2);
                        var a = numbers[0] + "+" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                     
                        $(".hist p").html(history)
                    } else if (eq.indexOf("-") != -1) {
                        var numbers = eq.split("-");
                        var x = parseInt(numbers[0], 2);
                        var y = parseInt(numbers[1], 2);
                        var sub = x - y;
                        var ans = sub.toString(2);
                        var a = numbers[0] + "-" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("*") != -1) {
                        var numbers = eq.split("*");
                        var x = parseInt(numbers[0], 2);
                        var y = parseInt(numbers[1], 2);
                        var mul = x * y;
                        var ans = mul.toString(2);
                        var a = numbers[0] + "*" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    } else if (eq.indexOf("/") != -1) {
                        var numbers = eq.split("/");
                        var x = parseInt(numbers[0], 2);
                        var y = parseInt(numbers[1], 2);
                        var div = x / y;
                        var ans = div.toString(2);
                        var a = numbers[0] + "/" + numbers[1]
                        $(".result").html(a)
                        $(".input").html(ans)
                        var a = a + "=" + ans
                        history.push("<li><p>" + a + "</p></li>")
                        $(".hist p").html(history)
                    }
                    ip = ""
                    eq = ""
                    // eq = ans;
  
                    // $(".result").html(eq)
                }
            })
  
        }
    })
  
  
  
    $('.standard').click(function () {
        $('.p').toggle()
        $('.sc').toggle()
        $('.sm').toggle()
        $('.dc').toggle()
        input = ""
        equation = ""
        $(".input").html(equation)
        $(".result").html(result)
  
    });
  
    $('.programmer').click(function () {
        decimal = true
        $(".dec").css("color", "blue")
        $(".hex").css("color", "")
        $(".bin").css("color", "")
        $(".oct").css("color", "")
        $('.s').toggle()
        $('.sc').toggle()
        $('.pm').toggle()
        $('.dc').toggle()
        input = ""
        equation = ""
        $(".input").html(equation)
        $(".result").html(result)
  
  
        var ip = ""
        var eq = ""
  
        $(".pg").click(function () {
            ip = $(this).attr("value")
            eq += ip
            $(".input").html(ip)
            $('.input').css("font-weight", "bold")
            $('.input').css("font-size", "larger")
            $(".result").html(eq)
  
            // }
  
            $(".pmemstore").click(function () {
                memory = eq
                localStorage.setItem("memory", memory);
                $(".mem p").html(memory)
            })
  
            if (ip === "~") {
                eq = eq.slice(0, -1)
                if (eq.indexOf("+") != -1) {
                    var numbers = eq.split("+");
                    var x = parseInt(numbers[0], 10);
                    var y = parseInt(numbers[1], 10);
                    var sum = x + y;
                    var ans = sum.toString(10);
                    var a = numbers[0] + "+" + numbers[1]
                    $(".result").html(a)
                    $(".input").html(ans)
                    var a = a + "=" + ans
                    history.push("<li><p>" + a + "</p></li>")
                    $(".hist p").html(history)
                } else if (eq.indexOf("-") != -1) {
                    var numbers = eq.split("-");
                    var x = parseInt(numbers[0], 10);
                    var y = parseInt(numbers[1], 10);
                    var sub = x - y;
                    var ans = sub.toString(10);
                    var a = numbers[0] + "-" + numbers[1]
                    $(".result").html(a)
                    $(".input").html(ans)
                    var a = a + "=" + ans
                    history.push("<li><p>" + a + "</p></li>")
                    $(".hist p").html(history)
                } else if (eq.indexOf("*") != -1) {
                    var numbers = eq.split("*");
                    var x = parseInt(numbers[0], 10);
                    var y = parseInt(numbers[1], 10);
                    var mul = x * y;
                    var ans = mul.toString(10);
                    var a = numbers[0] + "*" + numbers[1]
                    $(".result").html(a)
                    $(".input").html(ans)
                    var a = a + "=" + ans
                    history.push("<li><p>" + a + "</p></li>")
                    $(".hist p").html(history)
                } else if (eq.indexOf("/") != -1) {
                    var numbers = eq.split("/");
                    var x = parseInt(numbers[0], 10);
                    var y = parseInt(numbers[1], 10);
                    var div = x / y;
                    var ans = div.toString(10);
                    var a = numbers[0] + "/" + numbers[1]
                    $(".result").html(a)
                    $(".input").html(ans)
                    var a = a + "=" + ans
                    history.push("<li><p>" + a + "</p></li>")
                    $(".hist p").html(history)
                }
                ip = ""
                eq = ""
  
  
  
                // eq = ans;
  
                // $(".result").html(eq)
            }
  
        })
  
  
    });
  
    $('.scientific').click(function () {
        $('.p').toggle()
        $('.s').toggle()
        $('.scm').toggle()
        $('.dc').toggle()
        input = ""
        equation = ""
        $(".input").html(equation)
        $(".result").html(result)
  
  
    });
  
    $('.date').click(function () {
        $('.p').toggle()
        $('.s').toggle()
        $('.sc').toggle()
        $('.dm').toggle()
  
  
  
    });
  
    $('.dateDiff').click(function () {
        var date1 = new Date($('#date1').val())
  
        var date2 = new Date($('#date2').val())
  
        var diff = new Date(date2.getTime() - date1.getTime())
  
        var year = diff.getUTCFullYear() - 1970
        var month = diff.getUTCMonth()
        var days = diff.getUTCDate() - 1
  
  
        if (days >= 7) {
            var weeks = Math.floor(days / 7)
            var day = days % 7
  
            if (weeks == 0) {
  
            } else if (weeks == 1) {
                $(".week").html(weeks + "week")
            } else {
                $(".week").html(weeks + "weeks")
            }
  
            if (day == 0) {
  
            } else if (day == 1) {
                $(".days").html(day + "day")
            } else {
                $(".days").html(day + "days")
            }
        }
  
        if (year == 0) {
  
        } else if (year == 1) {
            $(".year").html(year + "year")
        } else {
            $(".year").html(year + "years")
        }
  
        if (month == 0) {
  
        } else if (month == 1) {
            $(".month").html(month + "month")
        } else {
            $(".month").html(month + "months")
        }
  
        if (days == 0) {
  
        } else if (days == 1) {
            $(".ttldays").html(days + "day")
        } else {
            $(".ttldays").html(days + "days")
        }
  
  
    })
  
    $(".standardHistory").click(function () {
        $(".shistory").toggle()
        if (memory == "") {
            $(".mem p").html("There's no memory yet")
  
        }
        if (history.length < 1) {
            $(".hist p").html("There's no history yet")
        }
  
    })
  
  
  
    $(".memstore").click(function () {
        memory = equation
        localStorage.setItem("memory", memory);
        $(".mem p").html(memory)
  
    })
  
    $(".memadd").click(function () {
        memory = localStorage.getItem("memory");
        memory = eval(memory) + eval(equation)
        $(".mem p").html(memory)
  
    })
  
    $(".memsub").click(function () {
        memory = localStorage.getItem("memory");
        memory = eval(memory) - eval(equation)
        $(".mem p").html(memory)
  
    })
  
    $(".memrecall").click(function () {
        memory = localStorage.getItem("memory");
        $(".input").html(memory)
  
    })
  
    $(".memclear").click(function () {
        localStorage.removeItem("memory");
        memory = ""
        $(".mem p").html(memory)
  
    })
  
  
  
  })