import {useSelector} from 'react-redux';
import { setSearch } from './controls-slice';
import { selectSearch } from './controls-selectors';
import { useAppDispatch } from '../../store';
import React from 'react';

type onSearch = React.ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch];
}
