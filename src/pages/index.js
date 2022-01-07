import { Button, Heading } from '@chakra-ui/react';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/fireabase';

const getData = async () => {
	try {
		const docRef = await addDoc(collection(db, 'products'), {
			name: 'Big watch',
			price: 1815
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

const Index = () => (
	<Container height="100vh">
		<Heading>Hello world</Heading>
		<Button onClick={getData}>Clickable</Button>
	</Container>
);

export default Index;
