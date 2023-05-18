import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {useDispatch, useSelector} from "react-redux";
import {selectDetails} from "../store/details/details-selectors";
import {useEffect} from "react";
import {clearDetails, loadCountryByName} from "../store/details/details-actions";
import {Loader} from "../components/Loader/Loader";


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const {currentCountry, error, status }= useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch])
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <Loader />}
      {error && <h3>{error.message}...</h3>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
