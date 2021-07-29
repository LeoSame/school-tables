export const columnsForMaterial = columnLessons => {
  const columns = columnLessons.Items.map(item => {
    return { id: item.Id, label: item.Title, align: 'center', cursor: 'pointer', type: 'cell' };
  });

  return [
    { id: 'number', label: '№', minWidth: 10, align: 'center' },
    { id: 'Schoolboy', label: 'Учень', minWidth: 200, align: 'left' },
    ...columns,
  ];
};

export const rowsForMaterial = (schoolBoy, rate) => {
  const rows = schoolBoy.Items.map((item, index) => {
    const name = `${item.LastName ? item.LastName : ''} ${item.FirstName ? item.FirstName : ''} ${
      item.SecondName ? item.SecondName : ''
    }`;

    const rates = {};

    for (let i = 0; i < rate.Items.length; i++) {
      const { SchoolboyId, ColumnId, Title } = rate.Items[i];

      if (SchoolboyId === item.Id && (Title === 'Н' || Title === 'H')) {
        rates[ColumnId] = Title;
      }
    }
    return { number: ++index, Schoolboy: name, SchoolboyId: item.Id, ...rates };
  });

  return rows;
};
