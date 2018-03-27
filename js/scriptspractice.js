/* globals $ */

// Put all of your jQuery and JavaScript in this document.
var products = {
    "books": [
        {
            "id": 1,
            "title": "50 Shades of Grey",
            "author": "E. L. James",
            "image": "https://d188rgcu4zozwl.cloudfront.net/content/B007J4T2G8/resources/469708731",
            "price": 17.69,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },
        {
            "id": 2,
            "title": "50 Shade of Gray",
            "author": "Garfield",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51YUYsBp2CL._SX322_BO1,204,203,200_.jpg",
            "price": 17.69,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },
        {
            "id": 3,
            "title": "50 Shade of Gray",
            "author": "Garfield",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51HhuPD7WhL._SX322_BO1,204,203,200_.jpg",
            "price": 17.69,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        }
    ],
    "albums": [
        {
            "id": 1,
            "title": "Illmatic",
            "author": "Nas",
            "image": "https://audioxide.com/wp-content/uploads/2016/06/Illmatic-500x500.jpg",
            "price": "9.99",
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },
        {
            "id": 1,
            "title": "All Eyez On Me",
            "author": "2Pac",
            "image": "http://3.bp.blogspot.com/_5A6fSMDiXaI/TRGA65YolHI/AAAAAAAAAmo/NknnnYHa0II/s1600/2Pac_-_All_Eyez_on_Me_single_version.jpg",
            "price": "9.99",
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        },
        {
            "id": 1,
            "title": "Girl You Know It's True",
            "author": "Milli Vanilli",
            "image": "https://direct.rhapsody.com/imageserver/images/Alb.117181854/500x500.jpg",
            "price": "9.99",
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        }
    ]
};

function appendToPage( item ){
    var $image = $( "<img>" ).attr( "src", item.image );
    var $title = $( "<h1>" ).text( item.title );
    var $author = $( "<h2>" ).text( item.author );
    var $price = $( "<h2>" ).text( "$" + item.price );
    var $sellingPoints = $( "<p>" ).text( item.sellingPoints );
    var $description = $( "<div>" ).append( $sellingPoints );
    var $info = $( "<div>" ).append( $title, $author, $price );
    var $item = $( "<div>" ).append( $image, $info, $description );

    $( "#content" ).prepend( $item );
}

products.books.forEach( appendToPage );
products.albums.forEach( appendToPage );

$( "#books" ).click( () => console.log( products.books ) );
$( "#music" ).click( () => console.log( products.albums ) );
// event is a funciton
$( "form" ).on( "submit", ( event ) => {
    // event is an object
    // target is an element on the page
    // serializeArray looks at each part of the form as an array
    // ex name:"title",value:"hello World"
    var data = $( event.target ).serializeArray();
    // injecting into the form formObject
    // console.log(data) to view the data
    var formObject = {};
    // preventDefault prevents other actions from happening such as posting a form

    event.preventDefault();
    // adding sellingPoints inside of the empty object
    formObject.sellingPoints = [];
    // data is the name and the value of everything in the form
    // name and value are the objects
    // field is the input of the for
    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            // push sellingPoints to a prexisiting sellingPoints due to it being an array
            formObject.sellingPoints.push( field.value );
        }
        else{
            // value is the input and replaces name
            formObject[ field.name ] = field.value;
        }
    } );

    formObject.id = products[formObject.type].length + 1;

    products[formObject.type].push( formObject );
    // appendToPage can take any object and append it to the page
    appendToPage( formObject );
} );
