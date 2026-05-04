function runCode() {
    let code = document.getElementById("codeBox").value;
    let output = document.getElementById("outputFrame");

    output.srcdoc = code;
}

runCode();