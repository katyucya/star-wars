import { Grid, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface FieldProps{
  nome: string,
  valor: string
}

export const Field = (props:FieldProps) => {
  const {nome, valor} = props;

  return(
    <Grid item xs={12}>
      <Accordion>
        <AccordionSummary>
          expandIcon = {<ExpandMoreIcon/>}>
          aria-controls='panella-content'
          id="panella-header">
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Grid>
  )
}