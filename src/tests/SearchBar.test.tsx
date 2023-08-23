import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {filterItems} from "../appUtils";
import {mockItemList, mockSearchItem} from "./testConstants";
import SearchBar from "../components/SearchBar/SearchBar";

test('Renders the landing page', () => {
    const func = jest.fn();
    render(<BrowserRouter><SearchBar query={mockSearchItem.name} onChange={func}/></BrowserRouter>);
});

describe('SearchBar component', () => {

    it('should filter items correctly on basis of serach query', function () {
        const mockFilteredValues = filterItems(mockItemList, mockSearchItem.name, mockSearchItem.category_id);
        expect(mockFilteredValues).toMatchObject([mockSearchItem]);
    });

    it('matches snapshot', () => {
        const func = jest.fn();
        const { container } =  render(<BrowserRouter><SearchBar query={mockSearchItem.name} onChange={func}/></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});
