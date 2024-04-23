var ToDo = React.createClass({displayName: "ToDo",
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
    renderDefaultCard: function() {
        return(
            React.createElement("div", {className: "todo"}, 
                React.createElement("h3", null, this.props.children), 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil", onClick: this.edit}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash", onClick: this.delete})
            )
        )
    },
    renderEditCard: function() {
        return(
            React.createElement("div", {className: "todo"}, 
                React.createElement("textarea", {defaultValue: this.props.children, ref: "savedText"}), 
                React.createElement("button", {className: "btn btn-success glyphicon glyphicon-floppy-disk", onClick: this.save})
            )
        )
    },
    edit: function() {
        console.log("Editing task");
        this.setState({editing: true});
    },
    delete: function() {
        console.log("Task Deleted!");

    },
    save: function() {
        console.log("Task saved");
        this.setState({editing: false});
        var txt = this.refs.savedText.getDOMMode().value;
        console.log('The saved text is ' + txt)
    }
});
React.render(React.createElement(ToDo, null, "Some Random Task"), document.getElementById('react-component'));