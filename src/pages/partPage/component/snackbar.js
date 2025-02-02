import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp(props) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(props.alertt, { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('error')} id="snack_error" style={{ display: 'none' }}>Show success snackbar</Button>
      <Button onClick={handleClickVariant('warning')} id="snack_warning" style={{ display: 'none' }}>Show success snackbar</Button>
      <Button onClick={handleClickVariant('info')} id="snack_info" style={{ display: 'none' }}>Show success snackbar</Button>
      <Button onClick={handleClickVariant('success')} id="snack_success" style={{ display: 'none' }}>Show success snackbar</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack(props) {
  return (
    <SnackbarProvider maxSnack={5}>
      <MyApp alertt={props.alert} />
    </SnackbarProvider>
  );
}