import Meta from "../../components/Meta";

const Characters = ({ data, meta, errors }) => {
  const testData = [
    {
      id: 1,
      attributes: {
        name: "Harry James Potter",
        gender: "Male",
        born: "31 July 1980, Godric's Hollow, West Country, England, Great Britain",
        died: null,
        species: "Human",
        height: null,
        weight: null,
        hair_color: "Jet-black",
        eye_color: "Bright green",
        skin_color: "Light",
        blood_status: "Half-blood",
        marital_status: "Married",
        nationality: "English",
        animagus: null,
        boggart: "Dementor",
        house: "Gryffindor",
        patronus: "Stag",
        alias_names: [
          "The Boy Who Lived",
          "The Chosen One",
          "Undesirable No. 1",
          "Lightning (by Potterwatch)",
          "The Boy Who Lied (by the Daily Prophet)",
          "Gregory Goyle (under disguise of Polyjuice Potion)",
          "Neville Longbottom (the name he told Stanley Shunpike in his third year)",
          "Barny Weasley (under disguise of Polyjuice Potion)",
          "Vernon Dudley (the name he used to disguise his identity from Snatchers)",
          "Albert Runcorn (under disguise of Polyjuice Potion)",
          "Potty (by Peeves and Slytherins)",
        ],
        jobs: [
          "Head of British Auror Office (formerly)",
          "Guest lecturer on Defence Against the Dark Arts",
          "Head of the Department of Magical Law Enforcement",
        ],
        titles: [
          "Triwizard Champion",
          "Seeker",
          "Quidditch Captain",
          "Master of Death",
        ],
        family_members: [
          "James Potter I (father) †",
          "Lily J. Potter (née Evans) (mother) †",
          "Ginevra Potter (née Weasley) (wife)",
          "James Potter II (son)",
          "Albus Potter (son)",
          "Lily L. Potter (daughter)",
          "Arthur Weasley (father-in-law)",
          "Molly Weasley (née Prewett) (mother-in-law)",
          "William Weasley (brother-in-law)",
          "Charles Weasley (brother-in-law)",
          "Percy Weasley (brother-in-law)",
          "Fred Weasley (brother-in-law) †",
          "George Weasley (brother-in-law)",
          "Ronald Weasley (brother-in-law)",
          "Fleur Weasley (née Delacour) (sister-in-law)",
          "Angelina Weasley (née Johnson) (sister-in-law)",
          "Audrey Weasley (sister-in-law)",
          "Hermione Granger (sister-in-law)",
          "Victoire Weasley (niece-in-law)",
          "Dominique Weasley (niece-in-law)",
          "Louis Weasley (nephew-in-law)",
          "Molly Weasley II (niece-in-law)",
          "Lucy Weasley (niece-in-law)",
          "Fred Weasley II (nephew-in-law)",
          "Roxanne Weasley (niece-in-law)",
          "Rose Granger-Weasley (niece-in-law)",
          "Hugo Granger-Weasley (nephew-in-law)",
          "Fleamont Potter (paternal grandfather) †",
          "Euphemia Potter (paternal grandmother) †",
          "Mr Evans (maternal grandfather) †",
          "Mrs Evans (maternal grandmother) †",
          "Petunia Dursley (née Evans) (maternal aunt) †",
          "Vernon Dursley (maternal uncle by marriage)",
          "Dudley Dursley (maternal first cousin)",
          "Mrs Dursley (maternal first cousin-in-law)",
          "Hardwin Potter (paternal ancestor) †",
          "Iolanthe Potter (née Peverell) (paternal ancestor) †",
          "Linfred of Stinchcombe (paternal ancestor) †",
          "Mr Peverell (paternal ancestor) †",
          "Ignotus Peverell (paternal ancestor) †",
          "Lord Voldemort (paternal distant cousin) †",
          "Delphini (paternal distant cousin)",
          "Potter family",
          "Evans family (maternal family)",
          "Fleamont family (paternal ancestors)",
          "Peverell family (paternal ancestors)",
          "Weasley family (in-laws)",
          "Prewett family (in-laws)",
          "House of Black (in-laws)",
        ],
        romances: ["Cho Chang (ex-girlfriend)", "Ginevra Potter (wife)"],
        wands: [
          "11″, Holly, phoenix feather",
          "10¾″, Vine, dragon heartstring (temporarily)",
          "10″, Blackthorn, unknown core (temporarily)",
          "10″, Hawthorn, unicorn hair (temporarily)",
          "15″, Elder, thestral hair (temporarily)",
        ],
        image_url:
          "https://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg",
        wiki_link: "https://harrypotter.fandom.com/wiki/Harry_Potter",
      },
    },
  ];
  return (
    <>
      <Meta />
      <h1>Welcome to the Harry Potter Character List</h1>
      <p>Total characters: {meta.pagination.records}</p>
      <p>Current page: {meta.pagination.current}</p>
      <p>Next page: {meta.pagination.next}</p>
      <p>Last page: {meta.pagination.last}</p>
      <p>{data.length}</p>
      <ul>
        {data.map((c) => {
          return (
            <li key={c.id}>
              <p>{c.attributes.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Characters.getInitialProps = async (ctx) => {
  const baseUrl = "http://localhost:3000";
  const res = await fetch(`${baseUrl}/v1/characters`);
  const json = await res.json();
  const { data, meta, errors } = json;
  return { data, meta, errors };
};

export default Characters;