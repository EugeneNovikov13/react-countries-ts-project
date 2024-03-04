import { Country } from 'types';
import { ControlsSlice } from 'features/controls/controls-slice';

export const filterVisibleCountries = (
	countries: Country[],
	search: ControlsSlice['search'] = '',
	region: ControlsSlice['region'] = ''
): Country[] => {
	return countries.filter(
		country => (
			country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
		),
	);
}