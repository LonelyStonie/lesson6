import React, { Component } from 'react';

class taqProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0
        }
    }

    taqHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    taqHandleSubmit = (ev)=>{
        ev.preventDefault();

        this.props.onSubmit(this.state);
    }


    render() {
        return (
            <div>
                <h2> them moi san pham</h2>
                <form className='col-md-6'> 
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            ID
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        name='id'
                        value={this.state.id}
                        onChange={this.taqHandleChange}
                        />
                         
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
              
                            title
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        name='title'
                        value={this.state.title}
                        onChange={this.taqHandleChange}

                        />
                         
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            status
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        name='status'
                        value={this.state.status}
                        onChange={this.taqHandleChange}

                        />
                         
                    </div>
                    <button className='btn btn-success' onClick={this.taqHandleSubmit}>ghi lai</button>
                </form>
            </div>
        )
    }
}
export default taqProductAdd;
