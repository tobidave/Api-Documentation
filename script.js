const Id = document.querySelector(".id")
const Name = document.querySelector(".name")
const getText = document.querySelector(".getText")
const getQuestion = document.querySelector(".question")
const header = document.querySelector(".header")
const getPost = document.querySelector(".getPost")
const addPost = document.querySelector(".addPost")

const addCategory = document.querySelector(".category").value
const addId = document.querySelector(".id").value
const addQuestion = document.querySelector(".question").value
const addType = document.querySelector(".type").value
const addDifficulty = document.querySelector(".difficulty").value


// Id.innerHTML += 01;
// Name.innerHTML = "Big";


getText.addEventListener('click', GetText );
getQuestion.addEventListener('click', GetQuestion );
getPost.addEventListener('click', GetPost );
addPost.addEventListener('click', AddPost );

function GetText(){
    fetch('sample.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        header.innerHTML = data;
    });


}

function GetQuestion(){
    fetch('questions.json')
    .then((res) => res.json())
    .then((data) => {
        let options = '<h2>questions</h2>';
        data.forEach(function(question){
            options +=  `
            <ul>
                <li>Category: ${question.category}</li>
                <li>Id: ${question.id}</li>
                <li>Question: ${question.question}</li>
                <li>Type: ${question.type}</li>
                <li>Difficulty: ${question.difficulty}</li>

            </ul>
            `;
        });
        Name.innerHTML = options
        })
    }
    
    function GetPost(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => {
            let Output = '<h2>Post</h2>';
            data.forEach(function(Post){
            Output +=
            `
            <ul>
                <li>Id: ${Post.id}</li>
                <li>UserId: ${Post.userId}</li>
                <li>Title: ${Post.title}</li>
                <li>Body: ${Post.body}</li>
            </ul>
            `; 
        })
          Name.innerHTML = Output;

        })
    }

    function AddPost(e){
        e.preventDefault();

        fetch('question.json', {
            method:'POST',
            headers: {
                'Accept': 'application/json text/plain, */*',
                'Content-type': 'application/json'
            },
            body:JSON.stringify(
                {
                    category: addCategory,
                    id: addId,
                    question: addQuestion,
                    type: addType,
                    difficulty: addDifficulty
                  }
            )
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    
    }