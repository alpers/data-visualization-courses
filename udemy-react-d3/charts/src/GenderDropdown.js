import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function GenderDropdown({ genderSelected }) {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				Please select gender
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item onSelect={() => genderSelected("men")}>Men A</Dropdown.Item>
				<Dropdown.Item onSelect={() => genderSelected("menb")}>Men B</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}