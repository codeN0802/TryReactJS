
import React from 'react'

class User extends React.Component{
    constructor(props){
        super(props)

        this.users =[{
            "id": 1,
            "name":"Nguyễn Lê Hữu Nghị"
        },{
            "id": 2,
            "name":"Nguyễn Anh Tú"
        },{
            "id": 3,
            "name":"Lê Thị Thu Nga"
        },{
            "id": 4,
            "name":"Nguyễn Hữu Nghiệp"
        }]
        this.state={"name":""}
    }
    changeName = (event) =>{
        this.setState({
            "name" : event.target.value
        })
    }
    render(){
        return (
            <>
                <h1>Hello Nghị</h1>
                <h2>Hi {this.props.firstName} {this.props.lastName}</h2>
                <ul>{this.users.map(u =><li>{u.id}-{u.name}</li>)}
                </ul>
                <div>
                    <input type="text" value={this.state.name} onChange={this.changeName}/>
                    <h3>{this.state.name}</h3>
                </div>
                
            </>
        );
    }
}
export default User;