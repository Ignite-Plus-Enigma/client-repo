import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Tabs.css";
import axios from 'axios'



const list = [ 
  /*{ name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" },
  { name: "item11" },
  { name: "item12" },
  { name: "item13" },
  { name: "item14" },
  { name: "item15" },
  { name: "item16" },
  { name: "item17" },
  { name: "item18" },
  { name: "item19" },
  { name: "item20" },
  { name: "item21" },
  { name: "item22" },
  { name: "item23" },
  { name: "item24" },
  { name: "item25" }*/
];

const MenuItem = ({ text, selected }) => {
  return <div active className={`menu-item ${selected ? "menu-item.active" : ""}`}>{text}</div>;
};

export const Menu =() =>
  this.state.subCategoryList.map(el => {
    const { name } = el;
    return <MenuItem text={name} key={name} />;
  });





class Tabs extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: "item1",
    translate: 0,
    transition: 0.4,
    wheel: true,
    subCategoryList:[],
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  

  componentDidUpdate( prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  componentDidMount(){
    const path=this.props.location.pathname;
    const mainCat=path.split("/")[2]
    let apiSearchEndpoint = 'http://localhost:8050/api/category/'+mainCat+'/subcategory';

    axios.get(apiSearchEndpoint)
            .then(response =>response.data)
            .then((data)=>{
                this.setState({
                    subCategoryList:data
                    });
              })

  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      dragging,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };

    return (
      <div className="Tabs">
        
        

        <ScrollMenu
          ref={el => (this.menu = el)}
          data={menu}
          transition={+transition}
          onUpdate={this.onUpdate}
          onSelect={this.onSelect}
          selected={selected}
          translate={translate}
          alignCenter={alignCenter}
          dragging={dragging}
          clickWhenDrag={clickWhenDrag}
          wheel={wheel}
        />

        <form className="properties">

<br />
          
          <label style={valueStyle}>
           
          </label>
          
         
        </form>
        <hr />
        <div>
         
        </div>
      </div>
    );
  }
}

export default Tabs;

