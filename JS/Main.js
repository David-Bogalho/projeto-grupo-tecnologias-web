document.querySelector("#formLogin").addEventListener('submit', (event) => {
    event.preventDefault();
    Login();
})

document.querySelector("#formRegister").addEventListener('submit', (event) => {
    event.preventDefault();
    Register();
})

let comments = []

let passwords = ["admin", "user"]
let usernames = ["admin", "user"]
let user_login_name; let user_login_pass
let user_register_name; let user_register_confirm_name; let user_register_pass; let user_register_confirm_pass

let userlogged = false; let accountlogged = ""

let register_verified = 1



function Login(){
  
    user_login_name = document.querySelector("#login_name").value 
    user_login_pass = document.querySelector("#login_pass").value
    for(let i = 0;i<usernames.length;i++){
        if(passwords[i] == user_login_pass && usernames[i] == user_login_name){
            userlogged = true
            accountlogged = usernames[i]
            alert("Logged in to "+usernames[i]+"!")
            console.log(usernames[i]);
            return(true);
        } 
    }
alert("Não existe conta com esse nome/pass!")
return false;
}

function Register(){
    user_register_name =  document.querySelector("#register_name").value
    user_register_confirm_name = document.querySelector("#register_confirm_name").value 
    user_register_pass = document.querySelector("#register_pass").value
    user_register_confirm_pass = document.querySelector("#register_confirm_pass").value
    if(user_register_name == user_register_confirm_name && user_register_pass == user_register_confirm_pass){
    for(let i = 0;i<usernames.length;i++){
        if(usernames[i] == user_register_name){
           register_verified = 0
        }
    }
    if(register_verified == 1){
            usernames.push(user_register_name)
            passwords.push(user_register_pass)
            userlogged = true
            accountlogged = user_register_name
            alert("Conta criada com sucesso!")
            console.log(user_register_name); console.log(user_register_pass)
        } else{alert("Já existe uma conta com esse nome!")}
        register_verified = 1
} 
else{alert("Certifique-se de que a password/nome e o confirmar password/nome são iguais.")}
return false;
}

function Museu(){
document.head.innerHTML = (`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Art Space</title>
    <link rel="stylesheet" type="text/css" href="/CSS/Museu.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> 
    `)
document.querySelector("main").innerHTML = (`  
    <main>
      <section class="grid-container">
        <div class="museu1">
          <img src="/EXTRA/Museum/m1.png" alt="Imagem do Museu do Louvre">
        </div>
        <div class="museu1PopUp">
         <div class="museu1PopUpText">
           <h2> Louvre Museum</h2>
           <p>The Louvre Museum is the world's largest and most visited art museum, <br>
             housed in a former royal palace on the Seine River <br> <br>
             <u>Location:</u> Paris, France</p><br>
           <button id="m1Btn" onclick="Museum1">
           <b>See More</b>
           </button>
         </div>
        </div>
        <div class="museu2">
          <img src="/EXTRA/Museum/m2.png" alt="Imagem do Museu Nacional de Arte da China">
        </div>
        <!-- <div class="museu2PopUp">
         <div class="museu2PopUpText">
           <h2> Nacional Art Museum of China</h2>
           <p>The National Art Museum of China, also known as NAMOC is China's 
            premier institution for modern and contemporary plastic arts <br> <br>
             <u>Location:</u> Beijing, China</p><br>
           <button id="m2Btn" onclick="Museum2">
           <b>See More</b>
           </button>
         </div>
        </div> -->
        <div class="museu3">
          <img src="/EXTRA/Museum/m3.png" alt="Imagem do Museu do Vaticano">
        </div>
        <!-- <div class="museu3PopUp">
         <div class="museu3PopUpText">
           <h2> Louvre Museum</h2>
           <p>The Louvre Museum is the world's largest and most visited art museum, <br>
             housed in a former royal palace on the Seine River <br> <br>
             <u>Location:</u> Paris, France</p><br>
           <button id="m3Btn" onclick="Museum3">
           <b>See More</b>
           </button>
         </div>
        </div> -->
      </section>

      <section class="decorativePillars">
        <div class="pillarH1">
          <img src="/EXTRA/PillarsHalf2.png" alt="Imagem cortada de um pilar decorativo do website.">
        </div>
        <div class="pillarF1">
          <img src="/EXTRA/PillarFull.png" alt="Imagem de um pilar decorativo do website.">
        </div>
        <div class="pillarF2">
          <img src="/EXTRA/PillarFull.png" alt="Imagem de um pilar decorativo do website.">
        </div>
        <div class="pillarH2">
          <img src="/EXTRA/PillarsHalf1.png" alt="Imagem cortada de um pilar decorativo do website.">
        </div>
      </section>
    </main>
     
    `)
}