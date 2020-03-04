import * as React from 'react';
import { DTExampleProps, DTHelpProps, DTOptionsProps } from '../../../../types/dataTypes';

export type ConstantType = {
	loopCount: number;
	values: string;
}

export const initialState: ConstantType = {
	loopCount: 10,
	values: ''
};

export const Example = ({ i18n }: DTExampleProps): string => i18n.see_help_dialog;

export const Options = ({ i18n, data, onUpdate }: DTOptionsProps): JSX.Element => {
	const onChange = (field: string, value: string): void => {
		onUpdate({
			...data,
			[field]: value
		});
	};
	return (
		<table cellSpacing="0" cellPadding="0">
			<tbody>
				<tr>
					<td>{i18n.loop_count}</td>
					<td>
						<input type="text" value={data.loopCount} size={5}
							onChange={(e): void => onChange('loopCount', e.target.value)} />
					</td>
				</tr>
				<tr>
					<td>{i18n.values}</td>
					<td>
						<input value={data.values} style={{ width: '100%' }}
							onChange={(e): void => onChange('values', e.target.value)} />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export const Help = ({ i18n }: DTHelpProps): JSX.Element => (
	<>
		<p>
			{i18n.help_1}
		</p>
		<ul>
			<li>{i18n.help_2}</li>
			<li>{i18n.help_3}</li>
			<li>{i18n.help_4}</li>
		</ul>
		<p>
			{i18n.help_5}
		</p>
	</>
);

// var _validate = function(rows) {
// 		var invalidLoopCountFields = [];
// 		var loopCountVisibleProblemRows = [];
//
// 		var emptyFields = [];
// 		var emptyFieldProblemRows = [];
//
// 		for (var i=0; i<rows.length; i++) {
// 			var loopVal = $.trim($("#dtConstantLoopCount_" + rows[i]).val());
// 			var visibleRowNum = generator.getVisibleRowOrderByRowNum(rows[i]);
// 			if (loopVal === "" || !(/^\d+$/.test(loopVal))) {
// 				loopCountVisibleProblemRows.push(visibleRowNum);
// 				invalidLoopCountFields.push($("#dtConstantLoopCount_" + rows[i]));
// 			}
// 			if ($("#dtOption_" + rows[i]).val() === "") {
// 				emptyFieldProblemRows.push(visibleRowNum);
// 				emptyFields.push($("#dtOption_" + rows[i]));
// 			}
// 		}
// 		var errors = [];
// 		if (loopCountVisibleProblemRows.length) {
// 			errors.push({ els: invalidLoopCountFields, error: LANG.invalid_loop_counts + " <b>" + loopCountVisibleProblemRows.join(", ") + "</b>"});
// 		}
// 		if (emptyFields.length) {
// 			errors.push({ els: emptyFields, error: LANG.incomplete_fields + " <b>" + emptyFieldProblemRows.join(", ") + "</b>"});
// 		}
//
// 		return errors;
// 	};
