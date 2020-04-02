
import awx2 from '@mmstudio/awx000002';

export default function render(mm: awx2, data: object) {
	return new Promise<void>((resolve) => {
		mm.data.page.setData(data, () => {
			resolve();
		});
	});
}
