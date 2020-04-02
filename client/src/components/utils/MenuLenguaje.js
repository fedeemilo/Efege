import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import LanguageIcon from '@material-ui/icons/Language';

export default function MenuLenguaje() {
	return (
		<PopupState variant='popover' popupId='demo-popup-menu'>
			{(popupState) => (
				<React.Fragment>
					<Button
						variant='contained'
                        color='primary'
						{...bindTrigger(popupState)}
					>
						<LanguageIcon />
					</Button>
					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>Español</MenuItem>
						<MenuItem onClick={popupState.close}>Inglés</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
}
