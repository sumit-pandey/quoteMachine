$(document).ready(function(){
    var quote;
    var author;
    function getQuote(){
        fetch('https://quota.glitch.me/random')
            .then(response => response.json())
            .then(data => {
                quote = data.quoteText;
                author = data.quoteAuthor;   
                $(".quote-box-inner").text('"' + quote +  '"');
                $(".inner-footer").text("-" + author)   
    })
  
}
getQuote();
$("#get-quote").on('click', function(){
    getQuote()
    $('.quote-box-inner').fadeOut(200).fadeIn()
})

})


