import Header from './components/header/header';
import './App.css';
import React from 'react';
import Footer from './components/footer/footer';
import Items from './components/items/items';
import { Categories } from './components/categories/categories';


class App extends React.Component {
 constructor(props){
  super(props)
  this.state={
    order:[],
    currentItems:[],
    items:[
      {
        id:1,
        title:"Table grey",
        img:"https://topsto-crimea.ru/images/detailed/6203/1645096507.9062.jpg",
        text:'lorem lorem lorem lorem lorem lorem',
        category:"chairs",
        price:'49,99'

      },
      {
        id:2,
        title:"Table grey",
        img:"https://static.dezeen.com/uploads/2017/09/london-design-festival-benjamin-hubert-axyl-chair-design_dezeen_2364_col_0.jpg",
        text:'lorem lorem lorem lorem lorem lorem',
        category:"sofa",
        price:'99.9'
      },
      {
        id:3,
        title:"Table grey",
        img:"https://knittystash.com/wp-content/uploads/2018/08/height-adjustable-coffee-table-expandable-into-dining-table-lovely-of-height-adjustable-coffee-table-expandable-into-dining-table.jpg",
        text:'lorem lorem lorem lorem lorem lorem',
        category:"table",
        price:'49,99'
      }
    ]
  }
  this.state.currentItems=this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
 }
 render(){

   return (
     <div className="wrapper">
       <Header order={this.state.order} onDelete = {this.deleteOrder}/>
       <Categories chooseCategory={this.chooseCategory} />
       <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
       <Footer />
     </div>
   );
 }
 
chooseCategory(category){
  if(category== 'all'){
    this.setState({currentItems:this.state.items})
    return
  }
this.setState({
  currentItems:this.state.items.filter(el=>el.category === category)
})
}

deleteOrder(id){
this.setState({order:this.state.order.filter(el=>el.id !==id)})
}

 addToOrder(item){
  let isArray = false
this.state.order.forEach(el =>{
  if(el.id === item.id){
    isArray = true
  }

})
if(!isArray)
this.setState({order:[...this.state.order,item]})

 }
}

export default App;
