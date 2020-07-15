import { ColDef, ColGroupDef, ValueSetterParams } from 'ag-grid-community';
import store from '../app/store';
import { actions, fields } from './tableSlice';

export const defaultColumnDefs: ColDef = {
  valueSetter: (p: ValueSetterParams) => {
    store.dispatch(
      actions.setFieldValue({
        id: p.data.id,
        field: p.colDef.field as any,
        newValue: p.newValue,
      })
    );
    return true;
  },
};

export const columnDefs: (ColDef | ColGroupDef)[] = [
  {
    headerName: 'Ins',
    field: fields.ins,
    editable: true,
  },
  {
    headerName: 'FB',
    field: fields.fb,
    editable: true,
  },
];
