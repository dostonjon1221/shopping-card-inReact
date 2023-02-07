import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state=[
            {
                key:"all",
                name:"total"

            },
            {
                key:"chairs",
                name:"Chairs "

            },
            {
                key:"sofa",
                name:"sofa"

            },
            {
                key:"table",
                name:"tables"

            },
        ]
    }
  render() {
    return (
    
        <div className='categories'>
            {this.state.map(el=>(
                <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>
   
    )
  }
}

export default Categories
