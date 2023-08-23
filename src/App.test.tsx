import {getByPlaceholderText, render, screen} from '@testing-library/react';
import App from './App';
import ItemView from "./components/ItemView/ItemView";
import {mockItemList} from "./tests/testConstants";
import NotificationPanel from "./components/Generic/NotificationPanel";
import {NO_DATA_FOUND} from "./appConstants";
import {BrowserRouter} from "react-router-dom";

test('renders the landing page', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
});

describe('App component', () => {
  it('renders a list of items', () => {
    render(<BrowserRouter><ItemView item={mockItemList[0]} isDetailView={false} /></BrowserRouter>);
    const itemElement = screen.getByText(mockItemList[0].name);
    expect(itemElement).toBeInTheDocument();
  });

  it('renders "No Data found" when the list is empty', () => {
    render(<NotificationPanel text={NO_DATA_FOUND} />);

    const noItemsMessage = screen.getByText('No Data found..');
    expect(noItemsMessage).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<BrowserRouter><ItemView item={mockItemList[0]} isDetailView={false} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
});


describe("Components rendering in App Component ", () => {
  it("Renders the Search Component", () => {
    const { getByPlaceholderText } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );

    const input = getByPlaceholderText(/Search/);
    expect(input).toBeInTheDocument();
  });
  it("Renders the Categories Component", () => {
    const { getByText } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );

    const tab = getByText(/all/);
    expect(tab).toBeInTheDocument();
  });
});






