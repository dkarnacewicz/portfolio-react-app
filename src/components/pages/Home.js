import React, { useState, useEffect } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Section from 'components/Section';

function Home() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch(
            'https://api-nodejs-todolist.herokuapp.com/task',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY'
                },
            }
        );
        const items = await response.json();
        setItems(items.data);
    }

    return (
        <Section>
            <h1>Home</h1>
            <List>
                {items.map(item => (
                    <ListItem key={item._id} text={item.description} />
                ))}
            </List>
        </Section>
    )
}

export default Home;