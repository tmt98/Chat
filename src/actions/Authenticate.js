import {LOGIN} from './types'
import {NavigationActions} from 'react-navigation'
export const loginSuccess= (user)=>{
	return (dispath)=>{
		dispath({
			type: LOGIN,
			payload: user,

		});
		const resetNavigator=NavigationActions.reset({
			routeName: 'Authorized',
			params:[
				user
				]

		})
		dispath(resetNavigator);

	}
}