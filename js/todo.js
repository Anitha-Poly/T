var ToDo = React.createClass({
        getInitialState: function(){
            return{editing: false}
        },
        
        render: function() {
            if(this.state.editing){
                return this.renderEditCard();
            }else{
                return this.renderDefaultCard();
            }    
        },
        componentDidMount: function(){
            
            $(this.getDOMNode()).draggable();
        },
        renderDefaultCard: function() {
            return(
                <div className="todo">
                    <h3>{this.props.children}</h3>
                    <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
                    <button className="btn btn-warning glyphicon glyphicon-trash" onClick={this.delete}></button>
                </div>
            )
        },
        renderEditCard: function() {
            return(
                <div className="todo">
                    <textarea defaultValue={this.props.children} ref="savedText"></textarea>
                    <button className="btn btn-success glyphicon glyphicon-floppy-disk" onClick={this.save}></button>    
                </div>
            )
        },
        edit: function() {
            console.log("Editing task");
            this.setState({editing: true});
            
        },
        delete: function() {
            console.log("Task Deleted!");
            this.props.onDelete(this.props.index);
    
        },
        save: function() {
            console.log("Task saved");
            this.setState({editing: false});
            var txt = this.refs.savedText.getDOMNode().value;
            console.log('The saved text is ' + txt)
            this.props.onSave(this.refs.savedText.getDOMNode().value, this.props.index);
        }
    });
    