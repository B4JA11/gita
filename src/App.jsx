import Heading from './Heading';
import InputField from './InputField';
import Paragraph from './Paragraph';

function App() {
  const ricxvi = 100;
  const teqstis_zoli = "გამარჯობა მსოფლიო";
  const masivi = [1, 2, 3, 4, 5];
  const obieqti = { saxeli: "ანი", asaki: 20 };
  
  const punqcia = () => {
    return "ფუნქციამ დააბრუნა ეს ტექსტი";
  };

  return (
    <div>
      <Heading />
      <InputField />
      <Paragraph />

      <hr />

      <p>რიცხვი: {ricxvi}</p>
      <p>ტექსტი: {teqstis_zoli}</p>
      <p>მასივი: {masivi.join(' - ')}</p>
      <p>ფუნქციის შედეგი: {punqcia()}</p>
      <p>ობიექტი: {JSON.stringify(obieqti)}</p>
    </div>
  );
}

export default App;