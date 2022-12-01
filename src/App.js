import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Content from "./content";
import Back from "./back";
import axios from 'axios'

const Home = () => {
  return (
    <>
    <Content></Content>
    
    </>
  );
};

const About = () => {
  return (
    <>
     <h1 align="center" class="abt">ABOUT US</h1>
     <br></br>
     <h3 align="center" class="abt2"><b>Gen-Z Blogs</b> is a travel blog website where people can share their travel experiences, pictures and queries.<br/><br/> People can read blogs that are posted on the site and comment their views and queries in the comment section. <br/> <br/>Users have to register on our site to avail posting authorization. Users can comment anonymously but can't post a blog without signing in. Users can also edit their posted blogs.<br/>
     <br/>Users can insert text, images and videos. Users have to provide media link to insert media into their blog.<br/>You can connect with us on our socials and share your feedback and queries. Happy Sharing!</h3>
    
    </>
  );
};

const Service = () => {
  return (
    <>
      <section className="hero-section">
        <p>
    
           </p>

      </section>
    </>
  );
};

function Bc(r,data,c){
for(var i=0;i<3;i++){
var a=document.createElement("div");
a.className='col-3 bc';
a.align="center";
var im=document.createElement("img");
im.src=data[i].img;
im.className='bi';
a.appendChild(im);
var t=document.createElement("h4");
t.innerHTML=data[i].title;
a.appendChild(t);
var b=document.createElement("div");
b.innerHTML="Posted on: ";
b.innerHTML+=data[i].date
var c=document.createElement("div");
c.innerHTML="By ";
c.innerHTML+=data[i].author;
a.appendChild(b);
a.appendChild(c);
r.appendChild(a)
}

}

function Load(){
  axios.get("http://localhost:4000/backend/getAllPost")
  .then(data => {console.log(data.data);
  var r=document.getElementById("root3")
r.innerHTML=""
  for(var l=0;l<data.data.length/3;l++){
    var rr=document.createElement("div");
    rr.className='row br';
    rr.align="center";

    for(var i=l*3;i<l*3+3;i++){
      var a=document.createElement("div");
      a.className='col-3 bc';
      a.align="center";
      var im=document.createElement("img");
      im.src=data.data[i].img;
      im.className='Bi';
      a.appendChild(im);
      var t=document.createElement("h4");
      t.innerHTML=data.data[i].title;
      a.appendChild(t);
      var b=document.createElement("div");
      b.innerHTML="Posted on: ";
      b.innerHTML+=data.data[i].date;
      var c=document.createElement("div");
      c.innerHTML="By ";
      c.innerHTML+=data.data[i].author;
      a.appendChild(b);
      a.appendChild(c);
      rr.appendChild(a);
      }






// Bc(rr,data.data,0);
r.appendChild(rr);
// }
    }
  })
  .catch(error => console.log(error));
  return " ";
}


function al(){
  alert("This feature will be available soon");
}
const Contact = () => {
  return (
    <>
    <div id="root2">
  <h1 class="abt" align="center">BLOGS</h1>
<div align="right">
  <button class="btn btn-danger pb" onClick={al}>Post Blog +</button>
</div>
{/* <Back></Back> */}
<br></br>
<div id="root3">
  <Load></Load>
{/* <div class="row br" align="center">

<div class="col-3 bc" align="center">
<img class="bi" src="https://th.bing.com/th/id/R.43a8fcca57febc3c3509f0485530fec0?rik=SpnxUE2pNUyoqQ&riu=http%3a%2f%2fmedia2.popsugar-assets.com%2ffiles%2fthumbor%2fOS81vOwzdZ9NZBYiS8ZPrs4jz5Q%3d%2ffit-in%2f1024x1024%2f2014%2f02%2f17%2f843%2fn%2f1922441%2f188193e9a2917c8e_thumb_temp_image215902961329390326.jpg&ehk=O5vpmF1IL5b3eczcZyeiQ8aeByLNaYOmGx9VN4wJwEQ%3d&risl=&pid=ImgRaw&r=0"></img>
<h4><a>Maldives Diaries</a></h4>

<div align="center">Posted on : 23-01-2023</div>
<div align="center">By Saurabh</div>
</div>

<div class="col-3 bc" align="center">
<img class="bi" src="https://th.bing.com/th/id/R.43a8fcca57febc3c3509f0485530fec0?rik=SpnxUE2pNUyoqQ&riu=http%3a%2f%2fmedia2.popsugar-assets.com%2ffiles%2fthumbor%2fOS81vOwzdZ9NZBYiS8ZPrs4jz5Q%3d%2ffit-in%2f1024x1024%2f2014%2f02%2f17%2f843%2fn%2f1922441%2f188193e9a2917c8e_thumb_temp_image215902961329390326.jpg&ehk=O5vpmF1IL5b3eczcZyeiQ8aeByLNaYOmGx9VN4wJwEQ%3d&risl=&pid=ImgRaw&r=0"></img>
<h4><a>Maldives Diaries</a></h4>
</div>

<div class="col-3 bc" align="center">
<img class="bi" src="https://th.bing.com/th/id/R.43a8fcca57febc3c3509f0485530fec0?rik=SpnxUE2pNUyoqQ&riu=http%3a%2f%2fmedia2.popsugar-assets.com%2ffiles%2fthumbor%2fOS81vOwzdZ9NZBYiS8ZPrs4jz5Q%3d%2ffit-in%2f1024x1024%2f2014%2f02%2f17%2f843%2fn%2f1922441%2f188193e9a2917c8e_thumb_temp_image215902961329390326.jpg&ehk=O5vpmF1IL5b3eczcZyeiQ8aeByLNaYOmGx9VN4wJwEQ%3d&risl=&pid=ImgRaw&r=0"></img>
<h4><a>Maldives Diaries</a></h4>
</div>



</div> */}
</div>

</div>



    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
