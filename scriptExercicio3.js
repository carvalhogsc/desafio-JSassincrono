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
            
        });
}

function renderResult(result) {  
    
    if (document.querySelector('#listRepository li')) {
        while (ulRepositoryElement.firstChild) {
            ulRepositoryElement.removeChild(ulRepositoryElement.firstChild);
        }
    }
  
   for (repository of result.data) {
        var liRepositoryElement = document.createElement('li');
        var repositoryText = document.createTextNode(repository.name);
        
        liRepositoryElement.value = repository.id;
        liRepositoryElement.appendChild(repositoryText);        
        ulRepositoryElement.appendChild(liRepositoryElement);
    }

    inputUserGithub.value = '';
}