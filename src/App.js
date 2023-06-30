import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { Formik, useFormik, ErrorMessage} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState, useSyncExternalStore } from 'react';
import './App.css';
import { signUpSchema } from './schemas';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function App() {




 const countries = [
   {"label": "Afghanistan", "code": "AF"},
{"label": "Åland Islands", "code": "AX"},
{"label": "Albania", "code": "AL"},
{"label": "Algeria", "code": "DZ"},
{"label": "American Samoa", "code": "AS"},
{"label": "AndorrA", "code": "AD"},
{"label": "Angola", "code": "AO"},
{"label": "Anguilla", "code": "AI"},
{"label": "Antarctica", "code": "AQ"},
{"label": "Antigua and Barbuda", "code": "AG"},
{"label": "Argentina", "code": "AR"},
{"label": "Armenia", "code": "AM"},
{"label": "Aruba", "code": "AW"},
{"label": "Australia", "code": "AU"},
{"label": "Austria", "code": "AT"},
{"label": "Azerbaijan", "code": "AZ"},
{"label": "Bahamas", "code": "BS"},
{"label": "Bahrain", "code": "BH"},
{"label": "Bangladesh", "code": "BD"},
{"label": "Barbados", "code": "BB"},
{"label": "Belarus", "code": "BY"},
{"label": "Belgium", "code": "BE"},
{"label": "Belize", "code": "BZ"},
{"label": "Benin", "code": "BJ"},
{"label": "Bermuda", "code": "BM"},
{"label": "Bhutan", "code": "BT"},
{"label": "Bolivia", "code": "BO"},
{"label": "Bosnia and Herzegovina", "code": "BA"},
{"label": "Botswana", "code": "BW"},
{"label": "Bouvet Island", "code": "BV"},
{"label": "Brazil", "code": "BR"},
{"label": "British Indian Ocean Territory", "code": "IO"},
{"label": "Brunei Darussalam", "code": "BN"},
{"label": "Bulgaria", "code": "BG"},
{"label": "Burkina Faso", "code": "BF"},
{"label": "Burundi", "code": "BI"},
{"label": "Cambodia", "code": "KH"},
{"label": "Cameroon", "code": "CM"},
{"label": "Canada", "code": "CA"},
{"label": "Cape Verde", "code": "CV"},
{"label": "Cayman Islands", "code": "KY"},
{"label": "Central African Republic", "code": "CF"},
{"label": "Chad", "code": "TD"},
{"label": "Chile", "code": "CL"},
{"label": "China", "code": "CN"},
{"label": "Christmas Island", "code": "CX"},
{"label": "Cocos (Keeling) Islands", "code": "CC"},
{"label": "Colombia", "code": "CO"},
{"label": "Comoros", "code": "KM"},
{"label": "Congo", "code": "CG"},
{"label": "Congo, The Democratic Republic of the", "code": "CD"},
{"label": "Cook Islands", "code": "CK"},
{"label": "Costa Rica", "code": "CR"},
{"label": "Croatia", "code": "HR"},
{"label": "Cuba", "code": "CU"},
{"label": "Cyprus", "code": "CY"},
{"label": "Czech Republic", "code": "CZ"},
{"label": "Denmark", "code": "DK"},
{"label": "Djibouti", "code": "DJ"},
{"label": "Dominica", "code": "DM"},
{"label": "Dominican Republic", "code": "DO"},
{"label": "Ecuador", "code": "EC"},
{"label": "Egypt", "code": "EG"},
{"label": "El Salvador", "code": "SV"},
{"label": "Equatorial Guinea", "code": "GQ"},
{"label": "Eritrea", "code": "ER"},
{"label": "Estonia", "code": "EE"},
{"label": "Ethiopia", "code": "ET"},
{"label": "Falkland Islands (Malvinas)", "code": "FK"},
{"label": "Faroe Islands", "code": "FO"},
{"label": "Fiji", "code": "FJ"},
{"label": "Finland", "code": "FI"},
{"label": "France", "code": "FR"},
{"label": "French Guiana", "code": "GF"},
{"label": "French Polynesia", "code": "PF"},
{"label": "French Southern Territories", "code": "TF"},
{"label": "Gabon", "code": "GA"},
{"label": "Gambia", "code": "GM"},
{"label": "Georgia", "code": "GE"},
{"label": "Germany", "code": "DE"},
{"label": "Ghana", "code": "GH"},
{"label": "Gibraltar", "code": "GI"},
{"label": "Greece", "code": "GR"},
{"label": "Greenland", "code": "GL"},
{"label": "Grenada", "code": "GD"},
{"label": "Guadeloupe", "code": "GP"},
{"label": "Guam", "code": "GU"},
{"label": "Guatemala", "code": "GT"},
{"label": "Guernsey", "code": "GG"},
{"label": "Guinea", "code": "GN"},
{"label": "Guinea-Bissau", "code": "GW"},
{"label": "Guyana", "code": "GY"},
{"label": "Haiti", "code": "HT"},
{"label": "Heard Island and Mcdonald Islands", "code": "HM"},
{"label": "Holy See (Vatican City State)", "code": "VA"},
{"label": "Honduras", "code": "HN"},
{"label": "Hong Kong", "code": "HK"},
{"label": "Hungary", "code": "HU"},
{"label": "Iceland", "code": "IS"},
{"label": "India", "code": "IN"},
{"label": "Indonesia", "code": "ID"},
{"label": "Iran, Islamic Republic Of", "code": "IR"},
{"label": "Iraq", "code": "IQ"},
{"label": "Ireland", "code": "IE"},
{"label": "Isle of Man", "code": "IM"},
{"label": "Israel", "code": "IL"},
{"label": "Italy", "code": "IT"},
{"label": "Jamaica", "code": "JM"},
{"label": "Japan", "code": "JP"},
{"label": "Jersey", "code": "JE"},
{"label": "Jordan", "code": "JO"},
{"label": "Kazakhstan", "code": "KZ"},
{"label": "Kenya", "code": "KE"},
{"label": "Kiribati", "code": "KI"},
{"label": "Korea, Republic of", "code": "KR"},
{"label": "Kuwait", "code": "KW"},
{"label": "Kyrgyzstan", "code": "KG"},
{"label": "Latvia", "code": "LV"},
{"label": "Lebanon", "code": "LB"},
{"label": "Lesotho", "code": "LS"},
{"label": "Liberia", "code": "LR"},
{"label": "Libyan Arab Jamahiriya", "code": "LY"},
{"label": "Liechtenstein", "code": "LI"},
{"label": "Lithuania", "code": "LT"},
{"label": "Luxembourg", "code": "LU"},
{"label": "Macao", "code": "MO"},
{"label": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
{"label": "Madagascar", "code": "MG"},
{"label": "Malawi", "code": "MW"},
{"label": "Malaysia", "code": "MY"},
{"label": "Maldives", "code": "MV"},
{"label": "Mali", "code": "ML"},
{"label": "Malta", "code": "MT"},
{"label": "Marshall Islands", "code": "MH"},
{"label": "Martinique", "code": "MQ"},
{"label": "Mauritania", "code": "MR"},
{"label": "Mauritius", "code": "MU"},
{"label": "Mayotte", "code": "YT"},
{"label": "Mexico", "code": "MX"},
{"label": "Micronesia, Federated States of", "code": "FM"},
{"label": "Moldova, Republic of", "code": "MD"},
{"label": "Monaco", "code": "MC"},
{"label": "Mongolia", "code": "MN"},
{"label": "Montserrat", "code": "MS"},
{"label": "Morocco", "code": "MA"},
{"label": "Mozambique", "code": "MZ"},
{"label": "Myanmar", "code": "MM"},
{"label": "Namibia", "code": "NA"},
{"label": "Nauru", "code": "NR"},
{"label": "Nepal", "code": "NP"},
{"label": "Netherlands", "code": "NL"},
{"label": "Netherlands Antilles", "code": "AN"},
{"label": "New Caledonia", "code": "NC"},
{"label": "New Zealand", "code": "NZ"},
{"label": "Nicaragua", "code": "NI"},
{"label": "Niger", "code": "NE"},
{"label": "Nigeria", "code": "NG"},
{"label": "Niue", "code": "NU"},
{"label": "Norfolk Island", "code": "NF"},
{"label": "Northern Mariana Islands", "code": "MP"},
{"label": "Norway", "code": "NO"},
{"label": "Oman", "code": "OM"},
{"label": "Pakistan", "code": "PK"},
{"label": "Palau", "code": "PW"},
{"label": "Palestinian Territory, Occupied", "code": "PS"},
{"label": "Panama", "code": "PA"},
{"label": "Papua New Guinea", "code": "PG"},
{"label": "Paraguay", "code": "PY"},
{"label": "Peru", "code": "PE"},
{"label": "Philippines", "code": "PH"},
{"label": "Pitcairn", "code": "PN"},
{"label": "Poland", "code": "PL"},
{"label": "Portugal", "code": "PT"},
{"label": "Puerto Rico", "code": "PR"},
{"label": "Qatar", "code": "QA"},
{"label": "Reunion", "code": "RE"},
{"label": "Romania", "code": "RO"},
{"label": "Russian Federation", "code": "RU"},
{"label": "RWANDA", "code": "RW"},
{"label": "Saint Helena", "code": "SH"},
{"label": "Saint Kitts and Nevis", "code": "KN"},
{"label": "Saint Lucia", "code": "LC"},
{"label": "Saint Pierre and Miquelon", "code": "PM"},
{"label": "Saint Vincent and the Grenadines", "code": "VC"},
{"label": "Samoa", "code": "WS"},
{"label": "San Marino", "code": "SM"},
{"label": "Sao Tome and Principe", "code": "ST"},
{"label": "Saudi Arabia", "code": "SA"},
{"label": "Senegal", "code": "SN"},
{"label": "Serbia and Montenegro", "code": "CS"},
{"label": "Seychelles", "code": "SC"},
{"label": "Sierra Leone", "code": "SL"},
{"label": "Singapore", "code": "SG"},
{"label": "Slovakia", "code": "SK"},
{"label": "Slovenia", "code": "SI"},
{"label": "Solomon Islands", "code": "SB"},
{"label": "Somalia", "code": "SO"},
{"label": "South Africa", "code": "ZA"},
{"label": "South Georgia and the South Sandwich Islands", "code": "GS"},
{"label": "Spain", "code": "ES"},
{"label": "Sri Lanka", "code": "LK"},
{"label": "Sudan", "code": "SD"},
{"label": "Surilabel", "code": "SR"},
{"label": "Svalbard and Jan Mayen", "code": "SJ"},
{"label": "Swaziland", "code": "SZ"},
{"label": "Sweden", "code": "SE"},
{"label": "Switzerland", "code": "CH"},
{"label": "Syrian Arab Republic", "code": "SY"},
{"label": "Taiwan, Province of China", "code": "TW"},
{"label": "Tajikistan", "code": "TJ"},
{"label": "Tanzania, United Republic of", "code": "TZ"},
{"label": "Thailand", "code": "TH"},
{"label": "Timor-Leste", "code": "TL"},
{"label": "Togo", "code": "TG"},
{"label": "Tokelau", "code": "TK"},
{"label": "Tonga", "code": "TO"},
{"label": "Trinidad and Tobago", "code": "TT"},
{"label": "Tunisia", "code": "TN"},
{"label": "Turkey", "code": "TR"},
{"label": "Turkmenistan", "code": "TM"},
{"label": "Turks and Caicos Islands", "code": "TC"},
{"label": "Tuvalu", "code": "TV"},
{"label": "Uganda", "code": "UG"},
{"label": "Ukraine", "code": "UA"},
{"label": "United Arab Emirates", "code": "AE"},
{"label": "United Kingdom", "code": "GB"},
{"label": "United States", "code": "US"},
{"label": "United States Minor Outlying Islands", "code": "UM"},
{"label": "Uruguay", "code": "UY"},
{"label": "Uzbekistan", "code": "UZ"},
{"label": "Vanuatu", "code": "VU"},
{"label": "Venezuela", "code": "VE"},
{"label": "Viet Nam", "code": "VN"},
{"label": "Virgin Islands, British", "code": "VG"},
{"label": "Virgin Islands, U.S.", "code": "VI"},
{"label": "Wallis and Futuna", "code": "WF"},
{"label": "Western Sahara", "code": "EH"},
{"label": "Yemen", "code": "YE"},
{"label": "Zambia", "code": "ZM"},
{"label": "Zimbabw","code": "ZN"}
 ]

 const names = [
  {
    "hobby": "3D printing"
  },
  {
    "hobby": "amateur radio"
  },
  {
    "hobby": "Scrapbook"
  },
  {
    "hobby": "Amateur radio"
  },
  {
    "hobby": "Acting"
  },
  {
    "hobby": "Baton twirling"
  },
  {
    "hobby": "Board games"
  },
  {
    "hobby": "Book restoration"
  },
  {
    "hobby": "Cabaret"
  },
  {
    "hobby": "Calligraphy"
  },
  {
    "hobby": "Candle making"
  },
  {
    "hobby": "Computer programming"
  },
  {
    "hobby": "Coffee roasting"
  },
  {
    "hobby": "Cooking"
  },
  {
    "hobby": "Coloring"
  },
  {
    "hobby": "Cosplaying"
  },
  {
    "hobby": "Couponing"
  },
  {
    "hobby": "Creative writing"
  },
  {
    "hobby": "Crocheting"
  },
  {
    "hobby": "Cryptography"
  },
  {
    "hobby": "Dance"
  },
  {
    "hobby": "Digital arts"
  },
  {
    "hobby": "Drama"
  },
  {
    "hobby": "Drawing"
  },
  {
    "hobby": "Do it yourself"
  },
  {
    "hobby": "Electronics"
  },
  {
    "hobby": "Embroidery"
  },
  {
    "hobby": "Fashion"
  },
  {
    "hobby": "Flower arranging"
  },
  {
    "hobby": "Foreign language learning"
  },
  {
    "hobby": "Gaming"
  },
  {
    "hobby": "tabletop games"
  },
  {
    "hobby": "role-playing games"
  },
  {
    "hobby": "Gambling"
  },
  {
    "hobby": "Genealogy"
  },
  {
    "hobby": "Glassblowing"
  },
  {
    "hobby": "Gunsmithing"
  },
  {
    "hobby": "Homebrewing"
  },
  {
    "hobby": "Ice skating"
  },
  {
    "hobby": "Jewelry making"
  },
  {
    "hobby": "Jigsaw puzzles"
  },
  {
    "hobby": "Juggling"
  },
  {
    "hobby": "Knapping"
  },
  {
    "hobby": "Knitting"
  },
  {
    "hobby": "Kabaddi"
  },
  {
    "hobby": "Knife making"
  },
  {
    "hobby": "Lacemaking"
  },
  {
    "hobby": "Lapidary"
  },
  {
    "hobby": "Leather crafting"
  },
  {
    "hobby": "Lego building"
  },
  {
    "hobby": "Lockpicking"
  },
  {
    "hobby": "Machining"
  },
  {
    "hobby": "Macrame"
  },
  {
    "hobby": "Metalworking"
  },
  {
    "hobby": "Magic"
  },
  {
    "hobby": "Model building"
  },
  {
    "hobby": "Listening to music"
  },
  {
    "hobby": "Origami"
  },
  {
    "hobby": "Painting"
  },
  {
    "hobby": "Playing musical instruments"
  },
  {
    "hobby": "Pet"
  },
  {
    "hobby": "Poi"
  },
  {
    "hobby": "Pottery"
  },
  {
    "hobby": "Puzzles"
  },
  {
    "hobby": "Quilting"
  },
  {
    "hobby": "Reading"
  },
  {
    "hobby": "Scrapbooking"
  },
  {
    "hobby": "Sculpting"
  },
  {
    "hobby": "Sewing"
  },
  {
    "hobby": "Singing"
  },
  {
    "hobby": "Sketching"
  },
  {
    "hobby": "Soapmaking"
  },
  {
    "hobby": "Sports"
  },
  {
    "hobby": "Stand-up comedy"
  },
  {
    "hobby": "Sudoku"
  },
  {
    "hobby": "Table tennis"
  },
  {
    "hobby": "Taxidermy"
  },
  {
    "hobby": "Video gaming"
  },
  {
    "hobby": "Watching movies"
  },
  {
    "hobby": "Web surfing"
  },
  {
    "hobby": "Whittling"
  },
  {
    "hobby": "Wood carving"
  },
  {
    "hobby": "Woodworking"
  },
  {
    "hobby": "Worldbuilding"
  },
  {
    "hobby": "Writing"
  },
  {
    "hobby": "Yoga"
  },
  {
    "hobby": "Yo-yoing"
  },
  {
    "hobby": "Air sports"
  },
  {
    "hobby": "Archery"
  },
  {
    "hobby": "Astronomy"
  },
  {
    "hobby": "Backpacking"
  },
  {
    "hobby": "BASE jumping"
  },
  {
    "hobby": "Baseball"
  },
  {
    "hobby": "Basketball"
  },
  {
    "hobby": "Beekeeping"
  },
  {
    "hobby": "Bird watching"
  },
  {
    "hobby": "Blacksmithing"
  },
  {
    "hobby": "Board sports"
  },
  {
    "hobby": "Bodybuilding"
  },
  {
    "hobby": "Brazilian jiu-jitsu"
  },
  {
    "hobby": "Community"
  },
  {
    "hobby": "Cycling"
  },
  {
    "hobby": "Dowsing"
  },
  {
    "hobby": "Driving"
  },
  {
    "hobby": "Fishing"
  },
  {
    "hobby": "Flag Football"
  },
  {
    "hobby": "Flying"
  },
  {
    "hobby": "Flying disc"
  },
  {
    "hobby": "Foraging"
  },
  {
    "hobby": "Gardening"
  },
  {
    "hobby": "Geocaching"
  },
  {
    "hobby": "Ghost hunting"
  },
  {
    "hobby": "Graffiti"
  },
  {
    "hobby": "Handball"
  },
  {
    "hobby": "Hiking"
  },
  {
    "hobby": "Hooping"
  },
  {
    "hobby": "Horseback riding"
  },
  {
    "hobby": "Hunting"
  },
  {
    "hobby": "Inline skating"
  },
  {
    "hobby": "Jogging"
  },
  {
    "hobby": "Kayaking"
  },
  {
    "hobby": "Kite flying"
  },
  {
    "hobby": "Kitesurfing"
  },
  {
    "hobby": "LARPing"
  },
  {
    "hobby": "Letterboxing"
  },
  {
    "hobby": "Metal detecting"
  },
  {
    "hobby": "Motor sports"
  },
  {
    "hobby": "Mountain biking"
  },
  {
    "hobby": "Mountaineering"
  },
  {
    "hobby": "Mushroom hunting"
  },
  {
    "hobby": "Mycology"
  },
  {
    "hobby": "Netball"
  },
  {
    "hobby": "Nordic skating"
  },
  {
    "hobby": "Orienteering"
  },
  {
    "hobby": "Paintball"
  },
  {
    "hobby": "Parkour"
  },
  {
    "hobby": "Photography"
  },
  {
    "hobby": "Polo"
  },
  {
    "hobby": "Rafting"
  },
  {
    "hobby": "Rappelling"
  },
  {
    "hobby": "Rock climbing"
  },
  {
    "hobby": "Roller skating"
  },
  {
    "hobby": "Rugby"
  },
  {
    "hobby": "Running"
  },
  {
    "hobby": "Sailing"
  },
  {
    "hobby": "Sand art"
  },
  {
    "hobby": "Scouting"
  },
  {
    "hobby": "Scuba diving"
  },
  {
    "hobby": "Sculling"
  },
  {
    "hobby": "Rowing"
  },
  {
    "hobby": "Shooting"
  },
  {
    "hobby": "Shopping"
  },
  {
    "hobby": "Skateboarding"
  },
  {
    "hobby": "Skiing"
  },
  {
    "hobby": "Skimboarding"
  },
  {
    "hobby": "Skydiving"
  },
  {
    "hobby": "Slacklining"
  },
  {
    "hobby": "Snowboarding"
  },
  {
    "hobby": "Stone skipping"
  },
  {
    "hobby": "Surfing"
  },
  {
    "hobby": "Swimming"
  },
  {
    "hobby": "Taekwondo"
  },
  {
    "hobby": "Tai chi"
  },
  {
    "hobby": "Urban exploration"
  },
  {
    "hobby": "Vacation"
  },
  {
    "hobby": "Vehicle restoration"
  },
  {
    "hobby": "Water sports"
  }
]
const [personName, setPersonName] = useState([]);
const [name,setName] = useState("")
const [address , setAddress] = useState("")
const [country , setCountry] = useState("")
const [gender , setGender] = useState('');



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    formik.setFieldValue("hobby",
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(formik.values.hobby);
  };


 const formik = useFormik({
  initialValues: {
    name: "",
    address: "",
    country: "",
    gender: "",
    hobby: []
  },
  validationSchema: signUpSchema,
  onSubmit: (values) => {
    console.log(values);
    toast("Form Submitted check console for output");
  }
 })
  return (
    <div className='top'>
    <form className="App" onSubmit={formik.handleSubmit}>
      <div className='second'>
      <TextField 
        id="name" 
        style={{marginTop: 20}} 
        label="Name" 
        variant="outlined" 
        className='second' 
        value={formik.values.name}
        onChange={formik.handleChange}
        />{formik.errors.name && formik.touched.name ? (
          <p style={{color: "red", fontSize: 15}}>{formik.errors.name}</p>
        ): null}</div>
      <div className='second'>
      <TextField
          className='second'
          id="address"
          label="Address"
          multiline
          maxRows={4}
          value={formik.values.address}
          onChange={formik.handleChange}
        />{formik.errors.address && formik.touched.address ? (
          <p style={{color: "red", fontSize: 15}}>{formik.errors.address}</p>
        ): null}</div>
        <Autocomplete
        freeSolo
          className='second'
          id="country"
          options={countries}
          renderInput={(params) => <TextField {...params} label="Country" />}
          value={formik.values.country}
          onChange={(e,newval) => formik.setFieldValue("country",newval)}
    />{formik.errors.country && formik.touched.country ? (
      <p style={{color: "red", fontSize: 15}}>{formik.errors.country}</p>
    ): null}
    
    <FormControl className='second'>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={formik.values.gender}
        onChange={(e,newval) => formik.setFieldValue("gender",newval)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    {formik.errors.gender && formik.touched.gender ? (
          <p style={{color: "red", fontSize: 15}}>{formik.errors.gender}</p>
        ): null}


    <div className='second'>
    <FormControl sx={{ m: 1 }} className='second'>
        <InputLabel id="demo-multiple-checkbox-label">Hobbies</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={formik.values.hobby}
          onChange={handleChange}
          input={<OutlinedInput label="Hobbies" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name.hobby} value={name.hobby}>
              <Checkbox checked={formik.values.hobby.indexOf(name.hobby) > -1} />
              <ListItemText primary={name.hobby} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formik.errors.hobby && formik.touched.hobby ? (
          <p style={{color: "red", fontSize: 15}}>{formik.errors.hobby}</p>
        ): null}
      </div>
      <button type='submit' className='button-17' >SUBMIT</button>
    </form>
    <ToastContainer />
    </div>
  );
}

export default App;
