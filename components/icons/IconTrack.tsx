import React, {ReactElement} from 'react';

function	IconTrack(props: React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg width={'24'} height={'24'} xmlns={'http://www.w3.org/2000/svg'} version={'1.1'} viewBox={'0 0 576 512'} {...props}>
			<path d={'M360 0C390.9 0 416 25.07 416 56V184C416 214.9 390.9 240 360 240H200C169.1 240 144 214.9 144 184V56C144 25.07 169.1 0 200 0H360zM360 48H320V112C320 120.8 312.8 128 304 128H256C247.2 128 240 120.8 240 112V48H200C195.6 48 192 51.58 192 56V184C192 188.4 195.6 192 200 192H360C364.4 192 368 188.4 368 184V56C368 51.58 364.4 48 360 48V48zM0 328C0 297.1 25.07 272 56 272H216C246.9 272 272 297.1 272 328V456C272 486.9 246.9 512 216 512H56C25.07 512 0 486.9 0 456V328zM176 384C176 392.8 168.8 400 160 400H112C103.2 400 96 392.8 96 384V320H56C51.58 320 48 323.6 48 328V456C48 460.4 51.58 464 56 464H216C220.4 464 224 460.4 224 456V328C224 323.6 220.4 320 216 320H176V384zM304 328C304 297.1 329.1 272 360 272H520C550.9 272 576 297.1 576 328V456C576 486.9 550.9 512 520 512H360C329.1 512 304 486.9 304 456V328zM480 384C480 392.8 472.8 400 464 400H416C407.2 400 400 392.8 400 384V320H360C355.6 320 352 323.6 352 328V456C352 460.4 355.6 464 360 464H520C524.4 464 528 460.4 528 456V328C528 323.6 524.4 320 520 320H480V384z'} fill={'currentcolor'}/>
		</svg>
	);
}

export default IconTrack;
