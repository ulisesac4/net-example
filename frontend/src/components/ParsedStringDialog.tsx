import { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type ParseStringDialogProps = {
  loading: boolean;
  open: boolean;
  result: string;
  handleClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
};

export default function ParseStringDialog({
  loading,
  open,
  result,
  handleClose,
}: ParseStringDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Result'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your parsed string is:{' '}
          <p>
            <b>{result}</b>
          </p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
