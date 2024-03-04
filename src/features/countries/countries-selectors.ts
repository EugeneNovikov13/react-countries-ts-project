import { RootState } from '../../store';
import { ControlsSlice } from '../controls/controls-slice';

export const selectCountriesInfo = (state: RootState) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length,
});

export const selectVisibleCountries = (state: RootState, { search = '', region = '' }: ControlsSlice) => {
	return state.countries.list.filter(
		country => (
			country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
		),
	);
};
