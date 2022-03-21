import {
	faShoppingBasket,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import "./TopBar.css";
import LogoImage from "../../images/Logo.png";

const TopBar = () => {
	return (
		<Container fluid>
			<Navbar className="top-bar" expand="lg">
				<Navbar.Brand href="#">
					<img src={LogoImage} width="30" height="30" alt="logo" srcset="" />
					SUBTLE FURNITURE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#action1">Home</Nav.Link>

						<NavDropdown title="Shop" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">
								Featured Product
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Tranding</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Join Our Special Customer List
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#action2">Collections</Nav.Link>
						<Nav.Link href="#">New Arrivals</Nav.Link>
					</Nav>
					<Form className="top-bar-search-form d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button className="top-bar-search-button">Search</Button>
					</Form>
					<div className="tool-bar-icons">
						<FontAwesomeIcon className="tool-bar-icon" icon={faUserCircle} />
						<FontAwesomeIcon
							className="tool-bar-icon"
							icon={faShoppingBasket}
						/>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default TopBar;
