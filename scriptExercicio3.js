var inputUserGithub = document.querySelector('input[name=userGitHub]');
var buttonSearch = document.querySelector('#buttonSearch');
var ulRepositoryElement = document.querySelector('#listRepository')

buttonSearch.onclick = function (){
    var user = inputUserGithub.value;
    axios.get('https://api.github.com/users/'+ user +'/repos')
        .then(function (response){
            renderResult(response);
        })
        .catch(function(error){
            if(error.request)                  
                messageError(error.request.status);            
        });
}

function messageError(codError){
    clearUlRepository();
    if(codError === 404){
        var errorRepositoryElement = document.createElement('p');
        var errorText = document.createTextNode("User not found");

        errorRepositoryElement.style.color = '#f00';
        errorRepositoryElement.style.fontSize = '18px';
        errorRepositoryElement.appendChild(errorText);

        ulRepositoryElement.appendChild(errorRepositoryElement);
    }
}
        

function renderResult(result) {

    clearUlRepository();
  
   for (repository of result.data) {
        var liRepositoryElement = document.createElement('li');
        var repositoryText = document.createTextNode(repository.name);
        
        liRepositoryElement.value = repository.id;
        liRepositoryElement.appendChild(repositoryText);        
        ulRepositoryElement.appendChild(liRepositoryElement);
    }

    inputUserGithub.value = '';
}

function clearUlRepository(){
    if (document.querySelector('#listRepository li') || document.querySelector('#listRepository p') ) {
        while (ulRepositoryElement.firstChild) {
            ulRepositoryElement.removeChild(ulRepositoryElement.firstChild);
        }
    }
}