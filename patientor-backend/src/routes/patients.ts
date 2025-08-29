import express, { Request, Response, NextFunction } from 'express';
import patientService from '../services/patientService';
import { Patient, NewPatientEntry, EntryWithoutId, Entry } from '../types';
import { NewEntrySchema, NewPatientSchema } from '../utils';
import { z } from 'zod';

const router = express.Router();


router.get('/', (_req, res: Response<Patient[]>) => {
  res.send(patientService.getPatients());
});

router.get('/:id', (req, res: Response<Patient>) => {
  const id = req.params.id;
  res.send(patientService.getPatientById(id));
});

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewPatientSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatientEntry>, res: Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);
  res.json(addedPatient);
});

const newEntryParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

router.post('/:id/entries', newEntryParser, (req: Request<{id: string}, unknown, EntryWithoutId>, res: Response<Entry | { error: string }>) => {
  const patient = patientService.getPatientById(req.params.id);

  if (!patient) {
    return res.status(404).send({ error: 'Patient not found' });
  }

  const newEntry = patientService.addEntry(patient, req.body);
  return res.json(newEntry);
});

router.use(errorMiddleware);

export default router;