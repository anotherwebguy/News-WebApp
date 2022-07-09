const apiKey = '7cb4d2969e0b46fabe84418b5a17eb51';

let newsAccordian = document.getElementById("newsAccordian");

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7cb4d2969e0b46fabe84418b5a17eb51', true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = "";
        articles.forEach((element,index) => {
            console.log(index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News ${index+1}: </b>${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordian">
                                <div class="card-body">${element["description"]}.   <a href="${element["url"]}" target="_blank">Read more...</a> </div>
                            </div>
                        </div>`;
            newsHTML += news;
        });
        newsAccordian.innerHTML = newsHTML;
       // console.log(json);
    } else {
        console.log("Some error occured");
    }
};

xhr.send();




