import { useState } from 'react';
import axios from 'axios';
import { Form , FormGroup , Input , Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const CreatePlayer = () => {
    let [playerList,setPlayerList] = useState([ ]);
    let [player,setPlayer] = useState({
        name: '',
        email: '',
        role: '',

    });
    const nav = useNavigate();
    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [role,setRole] = useState('');
    

    return(

        <div>
        <Form onSubmit={(event) => {
            event.preventDefault();
            setPlayerList([...playerList, player]);
            //playerList.push(player);
            console.log(playerList);
            
            
            
           
            }}>

            <FormGroup>
            <Label htmlFor="user-name">Name: </Label>
            <Input id="user-name" name='name' type="text" onChange={((event) => {setPlayer({...player, name: event.target.value})})} />
            </FormGroup>

            <FormGroup>
            <Label htmlFor="user-mail">Email: </Label>
            <Input id="user-mail" name='email' type="email" onChange = {((event) => {setPlayer({...player, email: event.target.value})})} />
            </FormGroup>

            <FormGroup>
            <Label htmlFor="user-role">Role: </Label>
            <Input id='user-role' name='role' type="text" onChange = {((event) => {setPlayer({...player, role: event.target.value})})} />
            </FormGroup>
            <Button type="submit">Add Player</Button>
            
        </Form>

        
        
        
        
        </div>
    )


}


export default CreatePlayer;
