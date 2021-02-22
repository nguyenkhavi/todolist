

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            acts: []
        }
        this.delete = this.delete.bind(this)
        this.fecthData = this.fecthData.bind(this)

    }
    fecthData() {
        axios({
            url: `/api/todo`,
            method: 'get',
        }).then((res) => {
            const acts = res.data;
            this.setState({ acts })
        })
    }
    componentDidMount() {
        this.fecthData()
    }
    delete(id) {
        axios({
            url: `/api/todo/${id}`,
            method: 'delete',
        }).then((res) => console.log(res.data))
        this.fecthData()
    }


    render() {
        console.log(this.state.acts)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.acts.map((item, idx) => (
                                <tr key={idx}>
                                    <th scope="row">
                                        <button onClick={() => this.update(item.id)} className="btn">
                                            Edit
                                        </button>
                                        <button onClick={() => this.delete(item.id)} className="btn">
                                            Delete
                                        </button>
                                    </th>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.is_done == 1 ? 'Done' : 'Wait'}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            is_done: 0
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeIsDone = this.handleChangeIsDone.bind(this)
        this.add = this.add.bind(this)

    }
    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeIsDone(event) {
        this.setState({
            is_done: event.target.value
        })
    }
    add() {
        const data = { title: this.state.title, is_done: this.state.is_done }
        axios({
            url: `/api/todo/add`,
            method: 'post',
            data
        })
    }
    render() {
        return (
            <div>
                <h1>Add a activity: </h1>
                <form style={{ width: '280px' }}>
                    <div className="form-group">
                        <input name="title" className="form-control" value={this.state.title} onChange={this.handleChangeTitle} />
                        <input type="number" name="is_done" className="form-control" value={this.state.is_done} onChange={this.handleChangeIsDone} />
                        <button onClick={this.add} className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </form>
            </div >
        )
    }
}
class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            newTitle: '',
            newIsDone: 0
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeIsDone = this.handleChangeIsDone.bind(this)
        this.handleChangeId = this.handleChangeId.bind(this)
        this.update = this.update.bind(this)

    }
    handleChangeTitle(event) {
        this.setState({
            newTitle: event.target.value
        })
    }
    handleChangeIsDone(event) {
        this.setState({
            newIsDone: event.target.value
        })
    }
    handleChangeId(event) {
        this.setState({
            id: event.target.value
        })
    }
    update() {
        const id = this.state.id
        const data = { title: this.state.newTitle, is_done: this.state.newIsDone }
        axios({
            url: `/api/todo/${id}`,
            method: 'put',
            data
        })

    }
    render() {
        return (
            <div>
                <h1>Form-edit</h1>
                <form style={{ width: '400px' }}>
                    <div className="form-group">
                        <label>ID of the activity which you wanna change</label>
                        <input type="number" name="id" className="form-control" value={this.state.id} onChange={this.handleChangeId} />
                        <label>New title</label>
                        <input name="title" className="form-control" value={this.state.newTitle} onChange={this.handleChangeTitle} />
                        <label>New status</label>
                        <input type="number" name="is_done" className="form-control" value={this.state.newIsDone} onChange={this.handleChangeIsDone} />
                        <button onClick={this.update} className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}
ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<List />, document.getElementById('list'));
ReactDOM.render(<EditForm />, document.getElementById('edit-form'));