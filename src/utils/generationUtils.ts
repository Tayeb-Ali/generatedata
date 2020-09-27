import { ColumnData } from '~types/general';
import { ETMessageData } from '~types/exportTypes';

export const getNumericFieldColumnIndexes = (generationData: ETMessageData): number[] => {
	const dataTypeMap: any = {};
	const dt = generationData.dataTypeMetadata;
	Object.keys(dt).forEach((dataType) => {
		if (dt[dataType] && dt[dataType].general && dt[dataType].general.dataType) {
			dataTypeMap[dataType] = dt[dataType].general.dataType;
		}
	});

	const numericFieldColIndexes: number[] = [];
	generationData.columns.forEach((col: ColumnData, colIndex: number) => {
		if (dataTypeMap[col.dataType] === 'number') {
			numericFieldColIndexes.push(colIndex);
		}
	});

	return numericFieldColIndexes;
};
