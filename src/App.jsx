import "./App.css";
export default function App(){

  return(
    <div className="App">

    <Welcome 
    name="Deva"
    pic="https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg"
/>
    <Welcome 
    name="Subhashree"
    pic="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
/>
    <Welcome 
    name="Lalu"
    pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIowiTvupIDXVcDEnmpeWkig90a4kXRgwW8g&usqp=CAU"
    />
    </div>
  );
}

function Welcome({pic, name}){
  return(
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1>
        Hello, <span className="name">{name}</span>😍
      </h1>
    </div>
  );
}