import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from '../../Menu/Menu.stories';

test("Should renders successfully with the list of menu EN", async () => {
  const menuList = ["Home", "Dev/TechLead", "Personal/Travel", "CV", "Contact"];

  render(
  <Menu.component 
    lang="en" 
    onClickStatus={()=>{}} />);

    menuList.forEach((value)=>{
      const regex = new RegExp(value, "i");
      const element = screen.getByText(regex);
      expect(element).toBeInTheDocument();
    })
})

test("Should renders successfully with the list of menu PT-BR", async () => {
  const menuList = ["Home", "Dev/TechLead", "Pessoal/Viagens", "CV", "Contato"];

  render(
  <Menu.component 
    lang="pt-br" 
    onClickStatus={()=>{}} />);

    menuList.forEach((value)=>{
      const regex = new RegExp(value, "i");
      const element = screen.getByText(regex);
      expect(element).toBeInTheDocument();
    })
})
