class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    }

    handleMovieChange(event) {
        this.setState({ value: event.target.value });
    }

    handleMovieSubmit(event) {
        event.preventDefault();
        this.props.newMovie(this.state.value);
    }

    render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleMovieSubmit },
            React.createElement(
                "label",
                null,
                "Add Movie:",
                React.createElement("input", { name: "newMovie", type: "text", value: this.state.value, onChange: this.handleMovieChange })
            ),
            React.createElement("input", { type: "submit" })
        );
    }
}

export default AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVNb3ZpZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVNb3ZpZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01vdmllIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFOLFNBQXVCQyxNQUFNQyxTQUE3QixDQUF1QztBQUNyQ0MsZ0JBQVlDLEtBQVosRUFBa0I7QUFDZCxjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjs7QUFJQSxhQUFLQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxhQUFLQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDRDs7QUFJTEQsc0JBQWtCRyxLQUFsQixFQUF5QjtBQUNyQixhQUFLQyxRQUFMLENBQWMsRUFBQ0wsT0FBT0ksTUFBTUUsTUFBTixDQUFhTixLQUFyQixFQUFkO0FBQ0g7O0FBRURHLHNCQUFrQkMsS0FBbEIsRUFBeUI7QUFDckJBLGNBQU1HLGNBQU47QUFDQSxhQUFLVCxLQUFMLENBQVdVLFFBQVgsQ0FBb0IsS0FBS1QsS0FBTCxDQUFXQyxLQUEvQjtBQUNIOztBQUdDUyxhQUFRO0FBQ04sZUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFVLEtBQUtOLGlCQUFyQjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUksK0NBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssTUFBNUIsRUFBbUMsT0FBTyxLQUFLSixLQUFMLENBQVdDLEtBQXJELEVBQTRELFVBQVUsS0FBS0MsaUJBQTNFO0FBRkosYUFEQTtBQUtBLDJDQUFPLE1BQUssUUFBWjtBQUxBLFNBREo7QUFTRDtBQWpDb0M7O0FBb0N2QyxlQUFlUCxRQUFmIiwiZmlsZSI6IkFkZE1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhhbmRsZU1vdmllQ2hhbmdlID0gdGhpcy5oYW5kbGVNb3ZpZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVNb3ZpZVN1Ym1pdCA9IHRoaXMuaGFuZGxlTW92aWVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9O1xuXG5cblxuaGFuZGxlTW92aWVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xufVxuXG5oYW5kbGVNb3ZpZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5uZXdNb3ZpZSh0aGlzLnN0YXRlLnZhbHVlKTtcbn1cblxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlTW92aWVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBBZGQgTW92aWU6IFxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuZXdNb3ZpZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU1vdmllQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiLz5cbiAgICA8L2Zvcm0+ICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRNb3ZpZTsiXX0=