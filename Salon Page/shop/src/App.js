import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
      item: [
        {
          id: 1,
          title: 'Ferrari',
          img: 'portfolio-1.jpg',
          desc: 'Moshina haqida malumot',
          category: 'sport',
          price: '4.908'
        },
        {
          id: 2,
          title: 'Mersedez',
          img: 'portfolio-2.jpg',
          desc: 'Moshina haqida malumot',
          category: 'sport',
          price: '408.997'
        },
        {
          id: 3,
          title: 'Chevrolet',
          img: 'portfolio-3.jpg',
          desc: 'Moshina haqida malumot',
          category: 'standart',
          price: '40.987'
        },
        {
          id: 4,
          title: 'BMW',
          img: 'portfolio-4.jpg',
          desc: 'Moshina haqida malumot',
          category: 'standart',
          price: '1.701'
        },
        {
          id: 5,
          title: 'Ravon',
          img: 'portfolio-5.jpg',
          desc: 'Moshina haqida malumot',
          category: 'classik',
          price: '6.080'
        }
      ]
    }
    this.state.currentItems =this.state.item
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} Items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem items={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(items) {
    this.setState({fullItem: items})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.item})
      return
    }

    this.setState({
      currentItems: this.state.item.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
