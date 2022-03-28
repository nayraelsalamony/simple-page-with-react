
import './App.css';
import Header from './componants/Header';
import  Slider  from './componants/Slider';
import MyCard from './componants/MyCard';
import Counter from './componants/Counter';
import Footer from './componants/Footer';
function App() {
  let Prodactes = [
    {
      id:1,
      title: 'Prodact1',
      text: 'Link1',
      listText:"seller eslam",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN0609X8xJKKEZ3UYmB33RP_vlBdVqQWhxw&usqp=CAU'},
    {
      id:2,
      title: 'Prodact2',
      text: 'Link2',
      listText:"seller nayra",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZEFiYwIbaDCODxX4k-KnVYYL47V-X71JQw&usqp=CAU'
    },
    {
      id:3,
      title: 'Prodact3',
      text: 'Link3',
      listText:"seller eslam",
      img: 'https://images.ctfassets.net/wlke2cbybljx/6mPk5fQdHG1kigUEwHDozx/20c26d96158ee414b89179f34bb65821/Pillowtalk-Makeup-Secrets-Bundle-Group-Packshot__1_.png'
    },
    {
      id:4,
      title: 'Prodact4',
      text: 'Link4',
      listText:"seller malk",
      img: 'https://wwd.com/wp-content/uploads/2021/12/best-makeup-kits.jpg?w=910&h=510&crop=1'
    }
  ]
  return (
    <>
    <Header/>
    < Slider />
    <Counter/>
    <div className='mt-5 p-5 d-flex flex-wrap '>
      {
        Prodactes.map((prodact,index) => {
          return (
            <MyCard key={prodact.id} title={prodact.title} text={prodact.text} listText={prodact.listText} img={prodact.img}/>
          )
        })
      }
    </div>
    <Footer/>
    </>
  );
}
export default App;
