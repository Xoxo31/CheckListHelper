import React, { useContext } from 'react';
import {Button, Textarea} from '@material-tailwind/react';
import GlobalStateContext from '../global/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
import { goToCheckListScreen } from '../routes/coordinator';

export default function InputPage() {
  const {myText, setMyText} = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const onChange = ({target}) => setMyText(target.value);
  const onClick = () => goToCheckListScreen(navigate);

  return (
      <div className='flex flex-col w-96 gap-6' >
        <p>
          Digite aqui seu texto: <br/>
        </p>
        <Textarea
        size='md'
        color='blue'
        type='text'
        variant='outlined'
        label='Cole Aqui'
        value={myText}
        onChange={onChange}
        />
        <Button
        size='sm'
        color={myText ? 'blue' : 'blue-gray'}
        disabled={!myText}
        onClick={onClick}
         >Transform</Button>
    </div>
  );
}

