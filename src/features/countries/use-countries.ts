import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadCountries } from './countries-slice';
import { selectCountriesInfo } from './countries-selectors';
import { selectRegion, selectSearch } from 'features/controls/controls-selectors';
import { useAppDispatch } from 'store';
import { Country } from 'types';
import { filterVisibleCountries } from './utils/filter-visible-countries';

export const useCountries = (): [Country[], ReturnType<typeof selectCountriesInfo>] => {
  const dispatch = useAppDispatch();

  const {status, error, list} = useSelector(selectCountriesInfo);
  const search = useSelector(selectSearch);
  const region = useSelector(selectRegion);

  const countries = filterVisibleCountries(list, search, region);
  const qty = list.length;

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, {status, error, list}];
}
