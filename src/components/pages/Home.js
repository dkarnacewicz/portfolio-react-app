import React from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Section from 'components/Section';
import { connect } from "react-redux";
import { fetchTodoList } from "actions/todoListActions";

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTodoList());
    }

    render() {
        const { error, loading, data } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }
      
        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <Section>
                <h1>Home</h1>
                <List>
                    {data.map(item => (
                        <ListItem key={item._id} text={item.description} />
                    ))}
                </List>
            </Section>
        );
    }
}

const mapStateToProps = state => ({
    data: state.todoList.items,
    loading: state.todoList.loading,
    error: state.todoList.error
});
  
export default connect(mapStateToProps)(Home);